import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Container, List } from '@material-ui/core';
import { logUserOut } from '../../services/loginRegisterApi';

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  homebtn: {
    color: 'white',
  },
}));

const NavBar = ({ userToken, handleLogout }) => {

  const classes = useStyles();
  if(userToken) return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to={'/'}>
            <HomeIcon className={classes.homebtn} size="large"/>
          </Link>
          <Container style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/places'}><List style={{ marginRight: '20px' }}>Getaways</List></Link> 
            <List style={{ marginRight: '20px' }}>Profile</List>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}><List onClick={async () => {
              handleLogout();
              logUserOut();}
            } style={{ marginRight: '20px' }}>Logout</List></Link>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to={'/'}>
            <HomeIcon className={classes.homebtn} size="large"/>
          </Link>
          <Container style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/places'}><List style={{ marginRight: '20px' }}>Getaways</List></Link> 
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/'}><List style={{ marginRight: '20px' }}>Login</List></Link> 
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

NavBar.propTypes = {
  userToken: PropTypes.string,
  handleLogout: PropTypes.func.isRequired,
};

export default NavBar;
