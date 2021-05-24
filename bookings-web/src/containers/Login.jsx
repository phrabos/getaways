import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import LoginControls from '../components/register-login/LoginControls';
import { userLogin } from '../services/loginRegisterApi';
import { Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';


const Login = ({ history, userToken, handleLogin }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  useEffect(() => {
    console.log('user is logged in:', !!userToken);
    
  }, []);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { status, message, token } = await userLogin(usernameInput, passwordInput);
    if(status) return alert(message);
    else history.push('/places');
    handleLogin(token);
    localStorage.setItem('TOKEN', token);
  };

  const handleNameChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };


  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* eslint-disable-next-line react/no-unescaped-entities*/}
      <Typography
        variant="h4"
      >Welcome to Ruby&#39;s Pet Friendly Getaways</Typography>
      <img style={{ width: '200px' }} src="https://radar.llc/images/dog.png" alt="dog"/>
      <LoginControls 
        usernameInput={usernameInput}
        passwordInput={passwordInput}
        handleLoginSubmit={handleLoginSubmit}
        handleNameChange={handleNameChange}
        handlePasswordChange={handlePasswordChange}
      />
      <br/>
      <Typography component={Link} to={'/register'}>
        Don&#39;t have an account? Signup Here!</Typography> 
    </div>
  
  );
};

Login.propTypes = {
  handleLogin: PropTypes.func.isRequired,
  userToken: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
};

export default Login;
