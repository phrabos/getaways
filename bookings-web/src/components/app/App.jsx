import React from 'react';
import Getaways from '../../containers/Getaways';
import GetawaysDetail from '../../containers/GetawaysDetail';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import NavBar from '../navbar/NavBar';

export default function App() {
  return (
    <>
      <Router>
        <NavBar />
        <Switch>
          <Route
            path="/"
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
          <Route
            path="/places/:id"
            exact
            render={(routerProps) => <GetawaysDetail {...routerProps} />}
          >
          </Route>
        </Switch>
      </Router>
    </>
  ); 
}
