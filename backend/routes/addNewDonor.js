const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')
const router = require('express').Router()


router.route('/').post((req, res) => {
    const creds = require('../credentials.json')

    async function accessSpreadsheet() {
        const doc = new GoogleSpreadsheet(process.env.SHEET_ID)
        await promisify(doc.useServiceAccountAuth)(creds)
        const info = await promisify(doc.getInfo)()
        const sheet = info.worksheets[0]

        const bloodgroup = req.body.bloodgroup
        const donorname = req.body.donorname
        const contactno = req.body.contactno
        const location = req.body.location
        const lastdonation = req.body.lastdonation

        // Main Query
        const newRow = {
            donorid: '=SUM(100 + ROW())',
            bloodgroup,
            donorname,
            contactno,
            location,
            lastdonation,
        }

        promisify(sheet.addRow)(newRow)
            .then(res.json('Donor Added!'))
    }

    accessSpreadsheet()
})

module.exports = router