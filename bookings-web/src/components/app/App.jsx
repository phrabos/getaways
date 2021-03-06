import React, { useState } from 'react';
import Getaways from '../../containers/Getaways';
import Favorites from '../../containers/Favorites';
import GetawaysDetail from '../../containers/GetawaysDetail';
import Login from '../../containers/Login';
import Register from '../../containers/Register';
import Profile from '../../containers/Profile';
import Reservations from '../../containers/Reseravtions';
import Home from '../../containers/Home';
import {
  BrowserRouter as Router, 
  Route, 
  Switch,
} from 'react-router-dom';
import NavBar from '../navbar/NavBar';

export default function App() {
  const [username, setUsername] = useState(localStorage.getItem('USER'));
  console.log('from App, is user logged in', username);

  // useEffect(() => {
  //   setUsername(localStorage.getItem('USER'));

  // }, []);

  const handleLogin = (user) => {
    setUsername(user);
  };

  const handleLogout = () => {
    setUsername('');
  };

  return (
    <>
      <Router>
        <NavBar userToken={username} handleLogout={handleLogout}/>
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
              userToken={username}
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
            render={(routerProps) => <Profile
              userToken={username}
              handleLogin={handleLogin} 
              {...routerProps} />}
          >
          </Route>          
          <Route
            path="/places"
            exact
            render={(routerProps) => <Getaways {...routerProps} />}
          >
          </Route>
          <Route
            path="/favorites"
            exact
            render={(routerProps) => <Favorites {...routerProps} />}
          >
          </Route>
          <Route
            path="/reservations"
            exact
            render={(routerProps) => <Reservations {...routerProps} />}
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
