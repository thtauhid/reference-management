const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 14001

app.use(cors())
app.use(express.json())

const addNewDonor = require('./routes/addNewDonor')
const viewExistingDonors = require('./routes/viewExistingDonors')
const newDonation = require('./routes/newDonation')
const donorProfile = require('./routes/donorProfile')

app.use('/addNewDonor', addNewDonor)
app.use('/viewExistingDonors', viewExistingDonors)
app.use('/newDonation', newDonation)
app.use('/donorProfile', donorProfile)

app.listen(port, () => {
    console.log(`App started on port ${port}`)
})