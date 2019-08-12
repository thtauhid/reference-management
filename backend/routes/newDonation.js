const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')
const router = require('express').Router()


router.route('/').post((req, res) => {
    const creds = require('../credentials.json')

    async function accessSpreadsheet() {
        const doc = new GoogleSpreadsheet(process.env.SHEET_ID)
        await promisify(doc.useServiceAccountAuth)(creds)
        const info = await promisify(doc.getInfo)()
        const sheet = info.worksheets[1]

        const donorid = req.body.donorid
        const donationtime = req.body.donationtime
        const placeofdonation = req.body.placeofdonation

        // Main Query
        const newRow = {
            donorid,
            donationtime,
            placeofdonation
        }

        promisify(sheet.addRow)(newRow)
            .then(res.json('Donation Recorded!'))
    }

    accessSpreadsheet()
})

module.exports = router