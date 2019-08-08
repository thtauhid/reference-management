import React, { Component } from 'react'
import axios from 'axios'

const Donor = props => (
    <tr>
		<td>{props.data.donorid}</td>
		<td>{props.data.bloodgroup}</td>
		<td>{props.data.donorname}</td>
		<td>{props.data.contactno}</td>
		<td>{props.data.location}</td>
		<td>{props.data.lastdonation.substring(0, 10)}</td>
	</tr>
)
export default class ViewExistingDonors extends Component {
    constructor(props) {
        super(props)

        this.state = {
            preloader: "Loading...",
            donorData: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4500/viewExistingDonors')
            .then(response => {
                this.setState({
                    donorData: response.data,
                    preloader: ''
                })
            })
            .catch(err => console.log('Error' + err))
    }

    DonorList() {
        return this.state.donorData.map(data => {
            return <Donor data={data} key={data.donorid} />
        })
    }

    render() {
        return (
            <div>
				<table className="table table-striped table-bordered table-hover">
					<thead className="thead-dark">
						<tr>
							<th scope="col">Donor ID</th>
							<th scope="col">Blood Group</th>
							<th scope="col">Donor Name</th>
							<th scope="col">Contact No</th>
							<th scope="col">Location</th>
							<th scope="col">Last Donation</th>
						</tr>
					</thead>
					<tbody>
						{this.DonorList()}
					</tbody>
				</table>
                {this.state.preloader}
			</div>
        )
    }
}