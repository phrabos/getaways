import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import AccountBox from '@material-ui/icons/AccountBox';
import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import { useHistory } from 'react-router-dom';


const LoginControls = ({
  usernameInput,
  passwordInput, 
  handleLoginSubmit, 
  handleNameChange, 
  handlePasswordChange
}) => {

  return (
    <>
      <Typography variant="h4" gutterBottom>Login</Typography>
      <form onSubmit={handleLoginSubmit}>
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
};

LoginControls.propTypes = {
  usernameInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  handleLoginSubmit: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};

export default LoginControls;
