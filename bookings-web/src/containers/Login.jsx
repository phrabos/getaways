import React, { useState } from 'react';
import PropTypes from 'prop-types';
import LoginControls from '../components/register-login/LoginControls';
import { userLogin } from '../services/loginRegisterApi';


const Login = ({ history }) => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');


  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await userLogin(usernameInput, passwordInput);
    if(status) return alert(message);
    else history.push('/places');
  };

  const handleNameChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };



  return (

    <LoginControls 
      usernameInput={usernameInput}
      passwordInput={passwordInput}
      handleLoginSubmit={handleLoginSubmit}
      handleNameChange={handleNameChange}
      handlePasswordChange={handlePasswordChange}
    />

  
  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
};

export default Login;
