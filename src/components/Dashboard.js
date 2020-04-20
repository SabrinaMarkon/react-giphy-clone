import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
import { CloudinaryContext, /*Transformation,*/ Image } from 'cloudinary-react';
import axios from 'axios';
import Nav from './Nav';
import { CLOUD_NAME, bigHeaderStyle, reactIconStyle } from '../UserConstants';

import {
    FacebookShareButton,
    // GooglePlusShareButton,
    // LinkedinShareButton,
    TwitterShareButton,
    // TelegramShareButton,
    // WhatsappShareButton,
    // PinterestShareButton,
    // VKShareButton,
    // OKShareButton,
    // RedditShareButton,
    // TumblrShareButton,
    // LivejournalShareButton,
    // EmailShareButton,
  } from 'react-share';

class Dashboard extends Component {

    state = {
        gifs: []
    }

    async getGifs() {
        await axios.get(`https://res.cloudinary.com/${CLOUD_NAME}/image/list/cliphy.json`)
            .then(res => {
                this.setState({
                    gifs: res.data.resources
                });
            })
            .catch(err => console.log(err));
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
                <div style={bigHeaderStyle}>
                    <h1 style={reactIconStyle}>Convert your mp4 or webm video to a small, quality gif!</h1>
                </div>
                {
                    this.state.gifs ?
                    <CloudinaryContext cloudName={CLOUD_NAME}>
                        {
                            gifs.map((data, index) => (
                                    <div className="col-md-4 col-sm-6 col-xs-12" key={index}>
                                        <div className="panel panel-default">
                                            <div className="panel-body">
                                                {/* <div className="embed-responsive embed-responsive-16by9"> <-makes them all the same size (cuts off parts of images) */}
                                                <div>
                                                    <Image cloudName={CLOUD_NAME} className="img-responsive center-block" publicId={data.public_id}></Image>
                                                </div>
                                            </div>
                                            <div className="panel-footer">
                                                <TwitterShareButton className="label label-info" title={"React Giphy Clone"} url={`http://res.cloudinary.com/${CLOUD_NAME}/image/upload/${data.public_id}.gif`}>Twitter</TwitterShareButton>
                                                <FacebookShareButton className="label label-default" url={`http://res.cloudinary.com/${CLOUD_NAME}/image/upload/${data.public_id}.gif`}>Facebook
                                                </FacebookShareButton>
                                            </div>
                                        </div>
                                    </div>
                            ))
                        }
                    </CloudinaryContext>
                    : 
                    <div style={bigHeaderStyle} data-testid="loading">
                        <img src="./images/loader.gif" alt="Loading..." style={{ width: 75, marginTop: 100 }} />
                    </div>
                }
                </div>
            </div>
        );
    }
    
}

export default Dashboard;