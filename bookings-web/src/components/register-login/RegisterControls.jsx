import React from 'react';
import PropTypes from 'prop-types';

const RegisterControls = ({
  usernameInput,
  emailInput,
  passwordInput, 
  handleRegisterSubmit, 
  handleNameChange, 
  handlePasswordChange,
  handleEmailChange
}) => (
  <>
    <h1>Signup</h1>
    <form onSubmit={handleRegisterSubmit}>
      <input
        type="text" 
        onChange={handleNameChange} 
        value={usernameInput} 
        placeholder="username">
      </input>
      <input
        type="text" 
        onChange={handleEmailChange} 
        value={emailInput} 
        placeholder="email address">
      </input>
      <input
        type="password" 
        onChange={handlePasswordChange}
        value={passwordInput} 
        placeholder="password">
      </input>
      <button>Register</button>
    </form>
  </>
);

RegisterControls.propTypes = {
  usernameInput: PropTypes.string.isRequired,
  emailInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  handleRegisterSubmit: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
  handleEmailChange: PropTypes.func.isRequired,
};

export default RegisterControls;
