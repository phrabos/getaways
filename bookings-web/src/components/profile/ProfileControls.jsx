import React from 'react';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import AccountBox from '@material-ui/icons/AccountBox';
// import ScatterPlotIcon from '@material-ui/icons/ScatterPlot';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import { useHistory } from 'react-router-dom';


const ProfileControls = ({
  oldEmailInput,
  newEmailInput,
  usernameInput,
  // passwordInput, 
  handleUpdateSubmit, 
  handleNameChange,
  handleOldEmailChange,
  handleNewEmailChange, 
  // handlePasswordChange
}) => {

  return (
    <>
      <Typography variant="h4" gutterBottom>Update Profile</Typography>
      <form onSubmit={handleUpdateSubmit}>
        <TextField
          required
          variant="filled"  
          label="old email"
          onChange={handleOldEmailChange} 
          value={oldEmailInput}
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
          variant="filled"  
          label="new email"
          onChange={handleNewEmailChange} 
          value={newEmailInput}
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
          variant="filled"  
          label="new username"
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
        {/* <br />
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
        /> */}
        <br />
        <br />
        <Button component="button" onClick={handleUpdateSubmit} variant="contained" color="primary">Submit</Button>
      </form>
    </>
  );
};

ProfileControls.propTypes = {
  usernameInput: PropTypes.string.isRequired,
  passwordInput: PropTypes.string.isRequired,
  oldEmailInput: PropTypes.string.isRequired,
  newEmailInput: PropTypes.string.isRequired,
  handleUpdateSubmit: PropTypes.func.isRequired,
  handleNameChange: PropTypes.func.isRequired,
  handleOldEmailChange: PropTypes.func.isRequired,
  handleNewEmailChange: PropTypes.func.isRequired,
  handlePasswordChange: PropTypes.func.isRequired,
};

export default ProfileControls;
