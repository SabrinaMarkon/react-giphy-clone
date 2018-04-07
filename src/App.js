import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from "react-router-dom";
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Callback from './components/Callback';
import { createBrowserHistory } from 'history';

const App = () => {
  console.log("app component running");
  return (
    <div className="container">
      <Router>
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/create" component={Create} />
          <Route path="/callback" component={Callback} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;