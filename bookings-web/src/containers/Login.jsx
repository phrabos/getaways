import React, { useState, useEffect } from 'react';
import LoginControls from '../components/register-login/LoginControls';
import { userLogin } from '../services/placesApi';

const Login = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    // userLogin('test@test.com', '1234');
    await userLogin(usernameInput, passwordInput);
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

export default Login;
