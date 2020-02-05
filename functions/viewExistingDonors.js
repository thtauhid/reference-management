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

		// Main Query
		const rows = await promisify(sheet.getRows)({ offset: 1 })
			.then((results) => send(results))
			.catch((err) => send(err))
	}

	if (event.httpMethod == 'GET') {
		accessSpreadsheet()
	}
}
