import React from 'react';
import PropTypes from 'prop-types';
// import Place from '../places/Place';
import { Button, Container, Typography } from '@material-ui/core';

// import { Link } from 'react-router-dom';

const ReservationsList = ({ reservations, handleCancel }) => {

  return (
    // <div style={{
    //   display: 'flex',
    //   flexDirection: 'column',
    //   flexWrap: 'wrap',
    //   justifyContent: 'center',
    //   width: '100%',
    //   // backgroundColor: 'grey'
    // }}>
    <>
      {reservations.map((place) => {
        return (
          // <Link to={`/places/${place.id}`} key={place.id}>
          // <Place key={place.id} {...place} />
          <Container
            style={{
              display: 'flex',
              // flexWrap: 'wrap',
              justifyContent: 'center',
              alignItems: 'center',
              margin: '10px',
            // backgroundColor: 'grey'
            }} 
            key={place._id}>
            <Typography 
              key={place._id}
              style={{ marginRight: '5px' }} >ID: {place._id} : Price ${place.total_price}</Typography>

            <Button 
              color="primary" 
              variant="contained"
              size="small"
              value={place._id}
              onClick={handleCancel}>Cancel
            </Button>
          </Container>
          // {/* </Link>  */}
        );}
      )}
    </>
    // </div>
  );
};

ReservationsList.propTypes = {
  // page: PropTypes.number.isRequired,
  handleCancel: PropTypes.func.isRequired,
  reservations: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      total_price: PropTypes.number.isRequired,
      // id: PropTypes.string.isRequired,
      // name: PropTypes.string.isRequired,
      // description: PropTypes.string.isRequired,
      // location: PropTypes.string.isRequired,
      // pricePerNight: PropTypes.number.isRequired,
      // image: PropTypes.string.isRequired,
      // imageThumbnail: PropTypes.string.isRequired,
      // maxGuests: PropTypes.number.isRequired,
      // petFriendly: PropTypes.bool.isRequired,
      // pool: PropTypes.bool.isRequired,
      // wifi: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default ReservationsList;
