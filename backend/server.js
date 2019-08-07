const express = require('express')
const cors = require('cors')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 5000

app.use(cors())
app.use(express.json())

const addNewDonor = require('./routes/addNewDonor')
const viewExisting = require('./routes/viewExisting')

app.use('/addNewDonor', addNewDonor)
app.use('/viewExisting', viewExisting)

app.listen(port, () => {
    console.log(`App started on port ${port}`)
})