import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Typography } from '@material-ui/core';


const Home = ({ history }) => {

  return (
    <Container style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Typography variant={'h1'} style={{ textAlign: 'center' }}>
        {/* eslint-disable-next-line react/no-unescaped-entities*/}
        Welcome to Ruby's Pet Friendly Getaways
      </Typography>
      <img style={{ width: '200px' }} src="https://radar.llc/images/dog.png" alt="dog"/>
      <Button
        variant="contained"
        color="primary"
        onClick={() => history.push('/places')}
      >
        Click to See Listings
      </Button>
    </Container>
  
  );
};

Home.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired
};

export default Home;
