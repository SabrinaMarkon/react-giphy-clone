import React from 'react';
import { Link } from 'react-router-dom';
import { CloudinaryContext, Transformation, Image } from 'cloudinary-react';
import axios from 'axios';
import { isLoggedIn } from '../utils/AuthService';
import Nav from './Nav';

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
                                                {/* <div className="embed-responsive embed-responsive-16by9"> <-makes them all the same size (cuts off parts of images) */}
                                                <div>
                                                    <Image  className="img-responsive center-block" publicId={data.public_id}></Image>
                                                </div>
                                            </div>
                                            <div className="panel-footer">
                                                <TwitterShareButton className="label label-info" title={"React Giphy Clone"} url={`http://res.cloudinary.com/sabrinamarkon/image/upload/${data.public_id}.gif`}>Twitter</TwitterShareButton>
                                                <FacebookShareButton className="label label-default" url={`http://res.cloudinary.com/sabrinamarkon/image/upload/${data.public_id}.gif`}>Facebook
                                                </FacebookShareButton>
                                            </div>
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