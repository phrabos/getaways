import React from 'react';
import PropTypes from 'prop-types';

const LoginControls = ({
  usernameInput,
  passwordInput, 
  handleLoginSubmit, 
  handleNameChange, 
  handlePasswordChange
}) => (
  <>
    <form onSubmit={handleLoginSubmit}>
      <input
        type="text" 
        onChange={handleNameChange} 
        value={usernameInput} 
        placeholder="username">
      </input>
      <input
        type="password" 
        onChange={handlePasswordChange}
        value={passwordInput} 
        placeholder="password">
      </input>
      <button>Submit</button>
    </form>
  </>
);

LoginControls.propTypes = {
  usernameInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};

export default LoginControls;
