import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';
// import { Link } from 'react-router-dom';

const PlaceList = ({ places, page }) => {
  const placesPaged = places.slice(((page - 1) * 24), (page * 24));

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}>
      {placesPaged.map((place) => {
        return (
          // <Link to={`/places/${place.id}`} key={place.id}>
          <Place key={place.id} {...place} />
          // {/* </Link>  */}
        );}
      )}
    </div>
  );
};

PlaceList.propTypes = {
  page: PropTypes.number.isRequired,
  places: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      pricePerNight: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      imageThumbnail: PropTypes.string.isRequired,
      maxGuests: PropTypes.number.isRequired,
      petFriendly: PropTypes.bool.isRequired,
      pool: PropTypes.bool.isRequired,
      wifi: PropTypes.bool.isRequired,
    })
  ).isRequired,
};

export default PlaceList;
