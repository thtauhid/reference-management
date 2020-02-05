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
		const sheet = info.worksheets[0]

		const { donorid, bloodgroup, donorname, contactno, location, lastdonation } = JSON.parse(event.body)

		// Main Query
		const newRow = {
			bloodgroup,
			donorname,
			contactno,
			location,
			lastdonation
		}

		// Main Query
		const rows = await promisify(sheet.getRows)({ query: 'donorid = ' + donorid })

		if (rows.length == 1) {
			;(rows[0].bloodgroup = bloodgroup),
				(rows[0].donorname = donorname),
				(rows[0].contactno = contactno),
				(rows[0].location = location),
				(rows[0].lastdonation = lastdonation),
				rows[0].save()
			send('Donor Updated!')
		}
		else {
			send('Donor not found!')
		}
	}

	if (event.httpMethod == 'POST') {
		accessSpreadsheet()
	}
}
