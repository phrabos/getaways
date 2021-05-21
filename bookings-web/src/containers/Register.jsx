import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import RegisterControls from '../components/register-login/RegisterControls';
import { userRegister } from '../services/loginRegisterApi';

const Register = () => {
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const history = useHistory();

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    // userLogin('test@test.com', '1234');
    await userRegister(emailInput, usernameInput, passwordInput);
    history.push('/login');
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

export default Register;
