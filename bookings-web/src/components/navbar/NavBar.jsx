import React from 'react';
import { Link } from 'react-router-dom';
// import Link from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Menu from '@material-ui/core/Menu';
import HomeIcon from '@material-ui/icons/Home';
import { Container, List } from '@material-ui/core';
import { logUserOut } from '../../services/loginRegisterApi';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
}));

const NavBar = () => {

  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link to={'/login'}>
            <IconButton><HomeIcon color="secondary" size="large"/> </IconButton>
          </Link>
          <Container style={{
            display: 'flex',
            justifyContent: 'flex-end',
          }}>
            <Link to={'/places'}><List style={{ marginRight: '20px' }}>Getaways</List></Link> 
            <List style={{ marginRight: '20px' }}>Profile</List>
            <Link to={'/login'}><List style={{ marginRight: '20px' }}>Login</List></Link> 
            <Link to={'/login'}><List onClick={async () => logUserOut()} style={{ marginRight: '20px' }}>Logout</List></Link>
          </Container>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default NavBar;
