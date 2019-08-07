import React, { Component } from 'react'
import axios from 'axios'

export default class AddNewDonor extends Component {
    constructor(props) {
        super(props)

        this.onChangeBloodGroup = this.onChangeBloodGroup.bind(this)
        this.onChangeDonorName = this.onChangeDonorName.bind(this)
        this.onChangeContactNo = this.onChangeContactNo.bind(this)
        this.onChangeLocation = this.onChangeLocation.bind(this)
        this.onChangeLastDonation = this.onChangeLastDonation.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            bloodgroup: '',
            donorname: '',
            contactno: '',
            location: '',
            lastdonation: ''
        }

    }

    onChangeBloodGroup(e) {
        this.setState({
            bloodgroup: e.target.value
        })
    }
    onChangeDonorName(e) {
        this.setState({
            donorname: e.target.value
        })
    }
    onChangeContactNo(e) {
        this.setState({
            contactno: e.target.value
        })
    }
    onChangeLocation(e) {
        this.setState({
            location: e.target.value
        })
    }
    onChangeLastDonation(e) {
        this.setState({
            lastdonation: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault()

        const newDonor = {
            bloodgroup: this.state.bloodgroup,
            donorname: this.state.donorname,
            contactno: this.state.contactno,
            location: this.state.location,
            lastdonation: this.state.lastdonation
        }

        axios.post('http://localhost:4500/addNewDonor', newDonor)
            .then(res => console.log(res.data))

        this.setState({
            bloodgroup: '',
            donorname: '',
            contactno: '',
            location: '',
            lastdonation: ''
        })
    }

    render() {
        return (
            <div>
				<h3>Add New Donor</h3>
				<form onSubmit={this.onSubmit} >
					<label>Blood Group</label>
					<input type="text" 
					required 
					className="form-control" 
					value={this.state.bloodgroup} 
					onChange={this.onChangeBloodGroup} />
					
					<label>Donor Name</label>
					<input type="text" 
					required 
					className="form-control" 
					value={this.state.donorname} 
					onChange={this.onChangeDonorName} />

					<label>Contact No</label>
					<input type="text" 
					required 
					className="form-control" 
					value={this.state.contactno} 
					onChange={this.onChangeContactNo} />

					<label>Location</label>
					<input type="text" 
					required 
					className="form-control" 
					value={this.state.location} 
					onChange={this.onChangeLocation} />

					<label>Last Donation</label>
					<input type="text" 
					required 
					className="form-control" 
					value={this.state.lastdonation} 
					onChange={this.onChangeLastDonation} />

					<input type="submit" value="Add New Donor" className="btn btn-primary"/>
				</form>
			</div>
        )
    }
}