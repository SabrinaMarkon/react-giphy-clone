React app to make a Giphy clone.

Demo:


How to set up:

1. Sign up at Cloudinary for hosting and transforming the files.
1. Add your Cloudinary credentials to the /src/utils/AuthServer.js file.
1. Add your Cloudinary info to /src/UserConstants.js.
1. npm install.


- /src/utils/AuthService.js from https://github.com/auth0-blog/reactjs-authentication-tutorial/blob/master/src/utils/AuthService.js
-Bootstrapped with create-react-app.
-Uses Cloudinary for hosting and transformation of files.
-auth0-js - For authentication 
-react-router - For routing within the app 
-jwt-decode - For decoding the JSON Web Token in the app 
-axios - For making network requests. 

User stories:
-Users should be able to sign up and log in.
-Registered users should be able to upload animated GIFs (hosted GIFs included) via the platform.
-Registered and unregistered users should be able to view all the animated GIFs on a dashboard.
-Users should able to share those GIFs on Facebook and Twitter.
-Users will be able to convert videos to GIFs and download them.

