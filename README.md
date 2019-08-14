Still in active development.

## Live:

Frontend: will update soon

Backend: will update soon - Refer to [Backend API](https://github.com/thtauhid/blood-management#back-end-1).

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


3. Adding Donation: http://YOUR_DOMAIN:PORT/newDonation [POST] 

```
{
	"donorid": "",
	"donationtime": "",
	"placeofdonation": ""
}
```

4. Donor Profile:

```
{
	"donorid": ""
}
```

5. Use .env file for the below variables-

```
PORT
SHEET_ID
```

### Front End:
1. Adding New Donor:
2. Viewing Existing Donors:

## Road Map

### Web App
1. Edit Donor Details
2. Delete Donor
3. Retire Donor
4. Make things more configurable

### Mobile App
1. Needs more thinking...
2. Will use React Native
