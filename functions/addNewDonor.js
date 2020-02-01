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
		const sheet = info.worksheets[0]

		const { bloodgroup, donorname, contactno, location, lastdonation } = JSON.parse(event.body)

		// Main Query
		const newRow = {
			donorid      : '=SUM(100 + ROW())',
			bloodgroup,
			donorname,
			contactno,
			location,
			lastdonation
		}

		promisify(sheet.addRow)(newRow).then(send('Donor Added!')).catch((err) => send(err))
	}

	if (event.httpMethod == 'POST') {
		accessSpreadsheet()
	}
}
