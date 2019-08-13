const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')
const router = require('express').Router()

router.route('/').delete((req, res) => {

    const creds = require('../credentials.json')

    async function accessSpreadsheet() {
        const doc = new GoogleSpreadsheet(process.env.SHEET_ID)
        await promisify(doc.useServiceAccountAuth)(creds)
        const info = await promisify(doc.getInfo)()
        const sheet = info.worksheets[0]
        const donorid = req.body.donorid

        // Main Query
        const rows = await promisify(sheet.getRows)({ query: 'donorid = ' + donorid })

        if (rows.length == 1) {
            rows[0].del()
            res.json('Donor Deleted!')
        } else {
            res.json('Donor not found!')
        }

    }

    accessSpreadsheet()
})

module.exports = router