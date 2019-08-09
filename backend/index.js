const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const addNewDonor = require('./routes/addNewDonor')
const viewExistingDonors = require('./routes/viewExistingDonors')

app.use('/addNewDonor', addNewDonor)
app.use('/viewExistingDonors', viewExistingDonors)

app.listen(port, () => {
    console.log(`App started on port ${port}`)
})