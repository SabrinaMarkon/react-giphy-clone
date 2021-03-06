React app to make a Giphy clone.

Demo:
https://react-giphy-clone.netlify.app

How to set up:

1. Sign up at Cloudinary for hosting and transforming the files.
1. Edit the .env file in the root of your project and enter your own Cloudinary credentials.
1. npm install.

User stories:
- As a user, I can register and login.
- As a registered user, I should be able to upload animated GIFs (hosted GIFs included) via the platform.
- As either a registered or unregistered user, I should be able to view all the animated GIFs on a dashboard.
- As a user, I should able to share those GIFs on Facebook and Twitter.
- As a user, I can convert videos to GIFs and download them.


- /src/utils/AuthService.js from https://github.com/auth0-blog/reactjs-authentication-tutorial/blob/master/src/utils/AuthService.js
- Bootstrapped with create-react-app.
- Uses Cloudinary for hosting and transformation of files:
"Cloudinary is an end-to-end image- and video-management solution for websites and mobile apps, covering everything from image and video uploads, storage, manipulations, optimizations to delivery". Cloudinary is a Multi-CDN Network that provides high availability of our assets.
- Auth0 - auth0-js - For user authentication 
- react-router - For routing within the app 
- jwt-decode - For decoding the JSON Web Token in the app 
- axios - For making network requests. 

[![Netlify Status](https://api.netlify.com/api/v1/badges/21c34001-5a17-4f77-8b09-9a4595d51a92/deploy-status)](https://app.netlify.com/sites/react-giphy-clone/deploys)
