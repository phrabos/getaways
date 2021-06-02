import React from 'react';
import PropTypes from 'prop-types';
import Place from './Place';
// import { Link } from 'react-router-dom';

const FavoritesList = ({ favorites, handleFavoriteUpdate }) => {
  // const filteredPlaces = places.filter((place) => place.petFriendly);

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      width: '100%',
      // backgroundColor: 'grey'
    }}>
      {favorites && favorites.map((fave) => {
        return (
          <Place 
            key={fave.id}
            handleFavoriteUpdate={handleFavoriteUpdate}
            id={fave.placeId} 
            name={fave.name}
            description={fave.description}
            location={fave.location}
            pricePerNight={fave.pricePerNight}
            image={fave.image}
            maxGuests={fave.maxGuests}
            pool={fave.pool}
            isFave={true}
          />
        );}
      )}
    </div>
  );
};

FavoritesList.propTypes = {
  // page: PropTypes.number.isRequired,
  handleFavoriteUpdate: PropTypes.func.isRequired,
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
  )
};

export default FavoritesList;
