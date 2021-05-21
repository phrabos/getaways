import React from 'react';
import Getaways from '../../containers/Getaways';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';

export default function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route
            path="/login"
            exact
            render={(routerProps) => <Login {...routerProps} />}
          >
          </Route>
          <Route
            path="/register"
            exact
            render={(routerProps) => <Register {...routerProps} />}
          >
          </Route>          
          <Route
            path="/places"
            exact
            render={(routerProps) => <Getaways {...routerProps} />}
          >
          </Route>
        </Switch>
      </Router>
    </>
  ); 
}
