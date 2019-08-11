import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import AddNewDonor from './components/AddNewDonor'
import ViewExistingDonors from './components/ViewExistingDonors'
import Home from './components/Home'

function App() {
    return (
        <div className="container">
    		<Router>
    			<Route path="/" component={Home} />	
    			<Route path="/add/donor" component={AddNewDonor} />	
    			<Route path="/view/donor/all" component={ViewExistingDonors} />	
    		</Router>
    	</div>
    );
}

export default App