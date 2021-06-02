import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';
// import { Link } from 'react-router-dom';

const PlaceList = ({ places, favorites, page, handleFavoriteUpdate }) => {
  const placesPaged = places.slice(((page - 1) * 24), (page * 24));

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',

    }}>
      {placesPaged.map((place) => {
        const isFave = favorites.find(fave => fave.placeId === place.id);
        // console.log(isFave);
        return (
          <Place 
            handleFavoriteUpdate={handleFavoriteUpdate}
            key={place.id} 
            {...place}
            isFave={isFave} />

        );}
      )}
    </div>
  );
};

PlaceList.propTypes = {
  page: PropTypes.number.isRequired,
  handleFavoriteUpdate: PropTypes.func.isRequired,
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
  favorites: PropTypes.arrayOf(
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
