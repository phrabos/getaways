import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import AccountBox from '@material-ui/icons/AccountBox';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import EmailIcon from '@material-ui/icons/Email';

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
    <Typography variant="h4" gutterBottom>Signup</Typography>
    <form onSubmit={handleRegisterSubmit}>
      <TextField
        required
        variant="filled"  
        label="username"
        onChange={handleNameChange} 
        value={usernameInput}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountBox />
            </InputAdornment>
          ),
        }}  
      />
      <br />
      <br />
      <TextField
        required
        variant="filled"  
        label="email"
        onChange={handleEmailChange} 
        value={emailInput}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <EmailIcon />
            </InputAdornment>
          ),
        }}  
      />
      <br />
      <br />
      <TextField
        required
        type="password"
        variant="filled"    
        label="password"
        onChange={handlePasswordChange}
        value={passwordInput} 
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <ScatterPlotIcon />
            </InputAdornment>
          ),
        }} 
      />
      <br />
      <br />
      <Button variant="contained" color="primary">Submit</Button>
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
