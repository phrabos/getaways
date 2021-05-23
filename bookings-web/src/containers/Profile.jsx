import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileControls from '../components/profile/ProfileControls';
import { userUpdate } from '../services/loginRegisterApi';


const Profile = ({ history, userToken }) => {
  const [oldEmailInput, setOldEmailInput] = useState('');
  const [newEmailInput, setNewEmailInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  useEffect(() => {
    console.log('user is logged in:', !!userToken);
    
  }, []);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await userUpdate(oldEmailInput, newEmailInput, passwordInput, usernameInput);
    if(status) return alert(message);
    else history.push('/places');

  };

  const handleOldEmailChange = (e) => {
    setOldEmailInput(e.target.value);
  };

  const handleNewEmailChange = (e) => {
    setNewEmailInput(e.target.value);
  };

  const handleNameChange = (e) => {
    setUsernameInput(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPasswordInput(e.target.value);
  };


  return (

    <ProfileControls 
      oldEmailInput={oldEmailInput}
      newEmailInput={newEmailInput}
      usernameInput={usernameInput}
      passwordInput={passwordInput}
      handleUpdateSubmit={handleUpdateSubmit}
      handleNameChange={handleNameChange}
      handleOldEmailChange={handleOldEmailChange}
      handleNewEmailChange={handleNewEmailChange}
      handlePasswordChange={handlePasswordChange}
    />

  
  );
};

Profile.propTypes = {
  userToken: PropTypes.string,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
};

export default Profile;
