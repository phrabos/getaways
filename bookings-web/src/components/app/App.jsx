import React, { useState } from 'react';
import Getaways from '../../containers/Getaways';
import GetawaysDetail from '../../containers/GetawaysDetail';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import Profile from '../../containers/Profile';
import Home from '../../containers/Home';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import NavBar from '../navbar/NavBar';

export default function App() {
  const [userToken, setUserToken] = useState(localStorage.getItem('TOKEN'));

  const handleLogin = (token) => {
    setUserToken(token);
  };

  const handleLogout = () => {
    setUserToken('');
  };

  return (
    <>
      <Router>
        <NavBar userToken={userToken} handleLogout={handleLogout}/>
        <Switch>
          <Route
            path="/"
            exact
            render={(routerProps) => <Home {...routerProps} />}
          >
          </Route>
          <Route
            path="/login"
            exact
            render={(routerProps) => <Login 
              handleLogin={handleLogin}
              userToken={userToken}
              {...routerProps} />}
          >
          </Route>
          <Route
            path="/register"
            exact
            render={(routerProps) => <Register
              handleLogin={handleLogin}
              {...routerProps} />}
          >
          </Route> 
          <Route
            path="/profile"
            exact
            render={(routerProps) => <Profile {...routerProps} />}
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
