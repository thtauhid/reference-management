import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

import AddNewDonor from './components/AddNewDonor'

function App() {
    return (
        <div className="container">
    		<Router>
    			<Route path="/addNewDonor" component={AddNewDonor} />	
    		</Router>
    	</div>
    );
}

export default App