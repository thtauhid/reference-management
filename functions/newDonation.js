//Done
const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')
const creds = require('../credentials.json')
require('dotenv').config()

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
		const sheet = info.worksheets[1]

		const { donorid, donationtime, placeofdonation } = JSON.parse(event.body)

		// Main Query
		const newRow = {
			donorid,
			donationtime,
			placeofdonation
		}

		promisify(sheet.addRow)(newRow).then(send('Donation Recorded!')).catch((err) => send(err))
		//todo: update last donation date on worksheet[0]
	}

	if (event.httpMethod == 'POST') {
		accessSpreadsheet()
	}
}
