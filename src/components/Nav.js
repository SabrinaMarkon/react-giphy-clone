import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import { uploadWidget } from '../utils/WidgetHelper';
import '../App.css';
import Create from './Create';
import { CLOUD_NAME, UPLOAD_PRESET } from '../UserConstants';

class Nav extends Component {

    uploadGif() {
        let cloudinarySettings = {
            cloud_name: CLOUD_NAME, // mandatory
            upload_preset: UPLOAD_PRESET, // mandatory
            tags: ['cliphy'], // API searches cloudinary and gets images that we have tagged with these/this value(s).
            sources: ['local', 'url', 'google-photos', 'facebook'],
            client_allowed_formats: ["png","gif", "jpeg"],
            keep_widget_open: true,
            theme: 'minimal',
        }
    }

    uploadWidget = (cloudinarySettings, res) => {
        console.log(res);
    }

    render() {
        console.log('catcatcat' + isLoggedIn()  + 'catcatcat'); // I like cats so border the isLoggedIn true/false by cats to show me in the console that an auth0 login was successful.

        return(
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <Link className="navbar-brand" to="/">React Giphy Clone</Link>
                    </div>
                    <div>
                        <ul className="nav navbar-nav">
                            <li>
                                <Link to="/">All Gifs</Link>
                            </li>
                            <li>
                                <Link to="/create">Create Gif</Link>
                            </li>
                        </ul>
                        <ul className="navbar navbar-nav navbar-right">
                            <li style={{listStyleType: 'none'}}>
                                {
                                    (isLoggedIn()) ? 
                                        <button type="button" className="btn btn-raised btn-md btn-info" onClick={this.uploadGif}>Upload Gif</button> 
                                        : ' '
                                }
                            </li>
                            <li style={{listStyleType: 'none'}}>
                                {
                                    (isLoggedIn()) ? 
                                        <button type="button" className="btn btn-raised btn-md btn-danger" style={{marginRight: '20px'}} onClick={() => logout()}>Log out</button>
                                        :
                                        <button type="button" className="btn btn-raised btn-md btn-info" style={{marginRight: '20px'}}  onClick={() => login()}>Login</button>
                                }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;