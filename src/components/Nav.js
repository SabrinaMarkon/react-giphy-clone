import React from 'react';
import { Link } from 'react-router';
import { login, logout, isLoggedIn } from '../utils/AuthService';
import { uploadWidget } from '../utils/WidgetHelper';
import '../App.css';
import Create from './Create';

class Nav extends React.Component {

    uploadGif() {
        let cloudinarySettings = {
            cloud_name: 'sabrinamarkon', // mandatory
            upload_preset: 'd4b5vsbo', // mandatory
            tags: ['cliphy'],
            sources: ['local', 'url', 'google-photos', 'facebook'],
            client_allowed_formats: ['gif'],
            keep_widget_open: true,
            theme: 'minimal',
        }
    }

    uploadWidget = (cloudinarySettings, res) => {
        console.log(res);
    }
    // uploadWidget((cloudinarySettings, res) => {
    //     console.log(res);
    // });

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
                                <Link to="/create">Create Gif</Link>
                            </li>
                        </ul>
                        <ul className="navbar navbar-nav navbar-right">
                            <li>
                                {
                                    (isLoggedIn()) ? <button type="button" className="btn btn-raised btn-sm btn-default" onClick={this.uploadGif}>Upload Gif</button> : ''
                                }
                            </li>
                            <li>
                                {
                                    (isLoggedIn()) ? 
                                    (
                                        <button type="button" className="btn btn-raised btn-sm btn-danger" onClick={() => logout()}>Log out</button>
                                        ) : (
                                        <button type="button" className="btn btn-raised btn-sm btn-default" onClick={() => login()}>Login</button>
                                    )
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