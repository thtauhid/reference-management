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
		// const donorid = req.body.donorid
		const { donorid } = JSON.parse(event.body)
		// Main Query
		const rows = await promisify(sheet.getRows)({ query: 'donorid = ' + donorid })

		if (rows.length == 1) {
			rows[0].del()
			send('Donor Deleted!')
			console.log('Donor Added!')
		}
		else {
			send('Donor not found!')
			console.log('Something bad happened.')
			console.log(error)
		}
	}

	if (event.httpMethod == 'POST') {
		accessSpreadsheet()
	}
}
