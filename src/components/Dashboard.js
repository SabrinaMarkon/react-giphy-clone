import React from 'react';
import { Link } from 'react-router';
import axios from 'axios';

import Nav from './Nav';

class Dashboard extends React.Component {

    state = {
        gifs: []
    }

    render() {

        const { gifs } = this.state;

        return(
            <div>
                <Nav />
                <div className="row">
                    <h3 className="col-md-12">The Dashboard</h3>
                </div>
            </div>
        );
    }
    
}

export default Dashboard;