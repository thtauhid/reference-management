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

        const donorid = req.body.donorid
        const bloodgroup = req.body.bloodgroup
        const donorname = req.body.donorname
        const contactno = req.body.contactno
        const location = req.body.location
        const lastdonation = req.body.lastdonation

        // Main Query
        const newRow = {
            bloodgroup,
            donorname,
            contactno,
            location,
            lastdonation,
        }


        // Main Query
        const rows = await promisify(sheet.getRows)({ query: 'donorid = ' + donorid })

        if (rows.length == 1) {
            rows[0].bloodgroup = bloodgroup,
                rows[0].donorname = donorname,
                rows[0].contactno = contactno,
                rows[0].location = location,
                rows[0].lastdonation = lastdonation,
                rows[0].save()
            res.json('Donor Updated!')
        } else {
            res.json('Donor not found!')
        }

    }

    accessSpreadsheet()
})

module.exports = router