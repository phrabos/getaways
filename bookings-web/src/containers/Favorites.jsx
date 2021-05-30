import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import FavoritesList from '../components/places/FavoritesList';
import { Typography } from '@material-ui/core';

const Favorites = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    getPlaces()
      .then(setPlaces)
      .finally(() => setLoading(false));
  }, []);

  const handleFavoriteUpdate = ({ id, petFriendly }) => {
    setPlaces(places => places.map((place) => {
      if(place.id === id) return {
        ...place,
        petFriendly,
      };
      return place;
    }));
  };

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <Typography
        style={{ textAlign: 'center', marginBottom: '10px' }} 
        variant="h4">My Favorites!</Typography>
      <FavoritesList places={places} handleFavoriteUpdate={handleFavoriteUpdate} />
    </>
  );
};

export default Favorites;
