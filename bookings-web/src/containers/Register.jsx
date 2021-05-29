import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@material-ui/core';
// import { useHistory } from 'react-router-dom';
import RegisterControls from '../components/register-login/RegisterControls';
import { userLogin, userRegister } from '../services/loginRegisterApi';

const Register = ({ history, handleLogin }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');


  const handleRegisterSubmit = async (e) => {
    if(!usernameInput) return alert('must enter a username!');
    if(!passwordInput) return alert('must enter a password!');
    if(!emailInput) return alert('must enter an email address!');
    e.preventDefault();
    const { status, message } = await userRegister(emailInput, usernameInput, passwordInput);
    if(status) return alert(message);
    else {
      const { user } = await userLogin(emailInput, passwordInput);
      console.log('user from login fetch', user);
      history.push('/places');
      handleLogin(user.username);
      localStorage.setItem('USER', user.username);

    } 
  };

  const handleNameChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmailInput(e.target.value);
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
      >Welcome to Ruby&#39;s Pet Friendly Getaways
      </Typography>
      <img style={{ width: '200px' }} src="https://radar.llc/images/dog.png" alt="dog"/>
      <RegisterControls 
        usernameInput={usernameInput}
        emailInput={emailInput}
        passwordInput={passwordInput}
        handleRegisterSubmit={handleRegisterSubmit}
        handleNameChange={handleNameChange}
        handlePasswordChange={handlePasswordChange}
        handleEmailChange={handleEmailChange}
      />
    </div>
  );
};

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
  handleLogin: PropTypes.func.isRequired,
};

export default Register;
