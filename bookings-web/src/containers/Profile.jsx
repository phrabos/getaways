import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ProfileControls from '../components/profile/ProfileControls';
import { userUpdate } from '../services/loginRegisterApi';


const Profile = ({ userToken }) => {
  const [oldEmailInput, setOldEmailInput] = useState('');
  const [newEmailInput, setNewEmailInput] = useState('');
  const [usernameInput, setUsernameInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  useEffect(() => {
    console.log('from Profile, user is logged in:', !!userToken);
    
  }, []);

  const handleUpdateSubmit = async (e) => {
    e.preventDefault();
    const { status, message } = await userUpdate(oldEmailInput, newEmailInput, passwordInput, usernameInput);
    // alert(status, message);
    if(status) alert(message);
    else alert('profile updated');

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
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      {/* eslint-disable-next-line react/no-unescaped-entities*/}
      <img style={{ width: '100px' }} src="https://radar.llc/images/dog.png" alt="dog"/>

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
    </div>

  
  );
};

Profile.propTypes = {
  userToken: PropTypes.string,
  // history: PropTypes.shape({
  //   push: PropTypes.func.isRequired,
  // }).isRequired
};

export default Profile;
