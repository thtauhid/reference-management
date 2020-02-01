const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')
const router = require('express').Router()

router.route('/').get((req, res) => {

    const creds = require('../credentials.json')

    async function accessSpreadsheet() {
        const doc = new GoogleSpreadsheet(process.env.SHEET_ID)
        await promisify(doc.useServiceAccountAuth)(creds)
        const info = await promisify(doc.getInfo)()
        const sheet = info.worksheets[0]

        // Main Query
        const rows = await promisify(sheet.getRows)({ offset: 1 })
            .then(results => res.json(results))

    }

    accessSpreadsheet()
})

module.exports = router