import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import { uploadWidget } from '../utils/WidgetHelper';
import '../App.css';
//import Create from './Create';
import { CLOUD_NAME, UPLOAD_PRESET } from '../UserConstants';

class Nav extends Component {

    uploadGif = () => {
        let cloudinarySettings = {
            cloud_name: CLOUD_NAME,
            upload_preset: UPLOAD_PRESET,
            tags: ['cliphy'],
            sources: ['local', 'url', 'google_photos', 'facebook'],
            client_allowed_formats: ["png", "gif", "jpeg"],
            keep_widget_open: true,
            multiple: true,
            theme: 'minimal',
        }
        uploadWidget(cloudinarySettings, (res) => {
            console.log(res);
        //   if (res && res[0] !== undefined) {
        //         this.setState({ isResult: true });
        //         this.setGifString(res[0].public_id);
        //     }
            console.log(res);
        });
    }

    render() {

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
                            {
                                (isLoggedIn()) ? 
                                <Link to="/create">Create Gif</Link>
                                : ''
                            }
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
                                        <button type="button" className="btn btn-raised btn-md btn-danger" style={{marginLeft: '10px', marginRight: '20px'}} onClick={() => logout()}>Log out</button>
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