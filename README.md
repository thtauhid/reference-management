## Live:

Frontend: http://blood-frontend.tauhid.xyz:10001

Backend: http://blood-backend.tauhid.xyz:14001

Spreadsheet: https://drive.google.com/open?id=1Cq5J67SgadclBfp-z1Va1V0i99nZwJpET-02YoMkIqI

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

1. Adding New Donor: http://YOUR_DOMAIN:PORT/addNewDonor [POST]

```
{
	"bloodgroup": "",
	"donorname": "",
	"contactno": "",
	"location": "",
	"lastdonation": ""
}
```

2. Viewing Existing Donors: http://YOUR_DOMAIN:PORT/viewExistingDonors [GET]

`{}`


3. Use .env file for the below variables-

```
PORT
SHEET_ID
```

### Front End:
Adding New Donor:
Viewing Existing Donors:

## Road Map

### Web App
1. Add Donation Date
2. Edit Donor Details
3. Delete Donor
4. Retire Donor
5. Make things more configurable

### Mobile App
1. Needs more thinking...
2. Will use React Native