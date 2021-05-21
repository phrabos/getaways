import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import { useHistory } from 'react-router-dom';
import RegisterControls from '../components/register-login/RegisterControls';
import { userRegister } from '../services/loginRegisterApi';

const Register = ({ history }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');


  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await userRegister(emailInput, usernameInput, passwordInput);
    console.log('from submit', status, message);
    if(!status.toString().startsWith('2')) return alert(message);
    else history.push('/login');
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
    <RegisterControls 
      usernameInput={usernameInput}
      emailInput={emailInput}
      passwordInput={passwordInput}
      handleRegisterSubmit={handleRegisterSubmit}
      handleNameChange={handleNameChange}
      handlePasswordChange={handlePasswordChange}
      handleEmailChange={handleEmailChange}
    />
  
  );
};

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
};

export default Register;
