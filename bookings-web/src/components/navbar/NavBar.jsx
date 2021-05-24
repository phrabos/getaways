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
  linkbtn: {
    textDecoration: 'none',
    color: 'inherit',
    marginRight: '20px',
  }
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
            <List className={classes.linkbtn} component={Link} to={'/places'}>Getaways</List>
            <List component={Link} to="/profile" className={classes.linkbtn}>Profile</List>
            <List
              className={classes.linkbtn}
              component={Link}
              to={'/'} 
              onClick={async () => {
                handleLogout();
                logUserOut();}
              }
            >Logout
            </List>
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
            <Link style={{ textDecoration: 'none', color: 'inherit' }} to={'/login'}><List style={{ marginRight: '20px' }}>Login</List></Link> 
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
