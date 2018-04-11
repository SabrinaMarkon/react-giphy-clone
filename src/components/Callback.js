import { Component } from 'react';
import { setIdToken, setAccessToken, isLoggedIn } from '../utils/AuthService';

class Callback extends Component {

//   constructor() {
//     super()
//   }

  componentDidMount() {
    setAccessToken();
    setIdToken();
    window.location.href = "/";
  }

  render() {
    console.log('bunnybunny' + isLoggedIn()  + 'bunnybunny'); // I like bunnies so show this in the console.log to let me know we've hit the callback file.
    return null;
  }
}

export default Callback;