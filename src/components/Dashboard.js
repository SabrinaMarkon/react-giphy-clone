import React from 'react';
import { Link } from 'react-router';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import axios from 'axios';
import { isLoggedIn } from '../utils/AuthService';
import Nav from './Nav';

class Dashboard extends React.Component {

    state = {
        gifs: []
    }

    getGifs() {
        axios.get('http://res.cloudinary.com/sabrinamarkon/image/list/cliphy.json')
            .then(res => {
                this.setState({
                    gifs: res.data.resources
                });
            })
    }

    componentDidMount() {
        this.getGifs();
    }

    render() {

        const { gifs } = this.state;

        return(
            <div>
                <Nav />
                <div className="row">
                    <h3 className="col-md-12">The Dashboard</h3>
                    <CloudinaryContext cloudName="sabrinamarkon">
                        {
                            gifs.map((data, index) => (
                                   <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
                                        <div className="panel panel-default">
                                            <div className="panel-body">
                                                <div className="embed-responsive embed-responsive-16by9">
                                                    <Image className="img-responsive" publicId={data.public_id}></Image>
                                                </div>
                                            </div>
                                            <div className="panel-footer"></div>
                                        </div>
                                   </div>
                            ))
                        }
                    </CloudinaryContext>
                </div>
            </div>
        );
    }
    
}

export default Dashboard;