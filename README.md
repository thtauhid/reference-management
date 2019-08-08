## Technologies Used:

### Front End:
1. React
2. React Router
3. React Datepicker
4. Bootstrap
5. Axios

### Back End:
1. Node JS
2. Express
3. Promisify
4. dotenv
5. Google Spreadsheet API

### Database:
1. Google Spreadsheet

## Functionalities:


## API Reference

### Back End: 

Adding New Donor: http://localhost:4500/addNewDonor [POST]

`{
	"bloodgroup": "",
	"donorname": "",
	"contactno": "",
	"location": "",
	"lastdonation": ""
}`

Viewing Existing Donors: http://localhost:4500/viewExistingDonors [GET]
`
{}
`


Use .env file for the below variables-
`
PORT
SHEET_ID
`
