const GoogleSpreadsheet = require('google-spreadsheet')
const { promisify } = require('util')
const router = require('express').Router()

router.route('/').get((req, res) => {

    const creds = require('../credentials.json')

    async function accessSpreadsheet() {
        const doc = new GoogleSpreadsheet(process.env.SHEET_ID)
        await promisify(doc.useServiceAccountAuth)(creds)
        const info = await promisify(doc.getInfo)()
        const DonorsSheet = info.worksheets[0]
        const DonationsSheet = info.worksheets[1]
        const donorid = req.body.donorid
        let DonorData, DonationData

        // Main Query
        await promisify(DonorsSheet.getRows)({ query: 'donorid = ' + donorid })
            .then(result => DonorData = result)

        await promisify(DonationsSheet.getRows)({ query: 'donorid = ' + donorid })
            .then(result => DonationData = result)


        res.json({
            donordata: DonorData,
            donationdata: DonationData
        })

    }

    accessSpreadsheet()
})

module.exports = router