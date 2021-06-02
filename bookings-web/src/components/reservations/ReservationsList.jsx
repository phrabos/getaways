import React from 'react';
import PropTypes from 'prop-types';
import { Button, Container, Typography } from '@material-ui/core';

const ReservationsList = ({ reservations, handleCancel }) => {

  return (
    <>
      {reservations.map((place, i) => {
        return (
          <Container
            key={`${place.id} - ${i}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              // flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '10px',
              maxWidth: '100%',
              border: '1px solid salmon'
            }} 
          >
            <Typography 
              style={{ marginRight: '5px', width: '100%', textAlign: 'center' }} >{place.name}</Typography>
            <Typography 
              style={{ marginRight: '5px', width: '100%', textAlign: 'center' }} >{place.location}</Typography>
            <Typography 
              style={{ marginRight: '5px', width: '100%', textAlign: 'center' }} >Total: ${place.totalPrice}</Typography>
            <img 
              style={{ width: '100px', marginBottom: '5px' }} 
              src={place.image} 
              alt={place.name} />

            <Button 
              color="primary" 
              variant="contained"
              size="small"
              value={place.id}
              onClick={handleCancel}>Cancel
            </Button>
          </Container>
        );}
      )}
    </>
  );
};

ReservationsList.propTypes = {
  // page: PropTypes.number.isRequired,
  handleCancel: PropTypes.func.isRequired,
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      totalPrice: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default ReservationsList;
