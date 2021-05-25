import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Place from '../components/places/Place';
import { getSinglePlace } from '../services/placesApi';
import { Button, Container, TextField, Typography } from '@material-ui/core';


const GetawaysDetail = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState({});
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');

  useEffect(() => {
    setLoading(true);
    getSinglePlace(match.params.id)
      .then(setPlace)
      .finally(() => setLoading(false));
  }, []);

  const handleSumbit = (e) => {
    e.preventDefault();
    console.log(checkin);
    console.log(checkout);
  };

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <Container style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '20px',
      }}>
        <Typography 
          variant="h4"
          style={{ marginBottom: '20px' }}
        >Book Reservation</Typography>
        <form onSubmit={handleSumbit}>
          <TextField
            type="date"
            label="check-in"
            onChange={(e) => setCheckin(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            type="date"
            label="check-out"
            onChange={(e) => setCheckout(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button onClick={handleSumbit} variant="contained" color="secondary">Submit</Button>
        </form>
      </Container>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Place
          id={place.id} 
          name={place.name}
          description={place.description}
          location={place.location}
          pricePerNight={place.pricePerNight}
          image={place.image}
          maxGuests={place.maxGuests}
          pool={place.pool}
        />
      </div>
     
    </>
  );
};

GetawaysDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default GetawaysDetail;

