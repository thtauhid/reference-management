import React, { Component } from 'react'
import { Link } from 'react-router-dom'

function openNetlifyModal() {
	const netlifyIdentity = window.netlifyIdentity

	if (netlifyIdentity) netlifyIdentity.open()
	else console.log('netlifyIdentity not defined')
}
// class NetlifyIdentity extends Component {

export default class Home extends Component {
	render() {
		return (
			<div>
				<nav className="navbar navbar-dark bg-dark navbar-expand-lg">
					<Link to="/" className="navbar-brand">
						BMS
					</Link>

					<div className="collapse navbar-collapse">
						<ul className="navbar-nav mr-auto">
							<li className="navbar-item">
								<Link to="/add/donor" className="nav-link">
									Add New Donor
								</Link>
							</li>
							<li className="navbar-item">
								<Link to="/view/donor/all" className="nav-link">
									View All Donor
								</Link>
							</li>
						</ul>
					</div>
				</nav>

				<button
					className="btn btn-primary"
					onClick={() => {
						openNetlifyModal()
					}}
				>
					Login
				</button>
			</div>
		)
	}
}
