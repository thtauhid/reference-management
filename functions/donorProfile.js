//Done
const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')
const creds = require('../credentials.json')

exports.handler = function(event, context, callback) {
	//
	const send = (body) =>
		callback(null, {
			statusCode : 200,
			body       : JSON.stringify(body)
		})

	//The function
	async function accessSpreadsheet() {
		const doc = new GoogleSpreadsheet(process.env.SHEET_ID)
		await promisify(doc.useServiceAccountAuth)(creds)
		const info = await promisify(doc.getInfo)()
		const DonorsSheet = info.worksheets[0]
		const DonationsSheet = info.worksheets[1]

		const { donorid } = JSON.parse(event.body)

		let DonorData, DonationData

		// Main Query
		await promisify(DonorsSheet.getRows)({ query: 'donorid = ' + donorid })
			.then((result) => (DonorData = result))
			.catch((err) => send(err))

		await promisify(DonationsSheet.getRows)({ query: 'donorid = ' + donorid })
			.then((result) => (DonationData = result))
			.catch((err) => send(err))

		send({
			donordata    : DonorData,
			donationdata : DonationData
		})
	}

	if (event.httpMethod == 'GET') {
		accessSpreadsheet()
	}
}
