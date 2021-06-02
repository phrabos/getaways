import React, { useState, useEffect } from 'react';
import { getFavoritesList, removeFavorite } from '../services/placesApi';
import FavoritesList from '../components/places/FavoritesList';
import { Typography } from '@material-ui/core';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    setLoading(true);
    getFavoritesList()
      .then(setFavorites)
      .finally(() => setLoading(false));
  }, []);

  const handleFavoriteUpdate = (e) => {
    removeFavorite(e.currentTarget.value)
      .then(() => getFavoritesList())
      .then(setFavorites);
  
    // setLoading(true);

  };

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <Typography
        style={{ textAlign: 'center', marginBottom: '10px' }} 
        variant="h4">My Favorites!</Typography>
      <FavoritesList favorites={favorites} handleFavoriteUpdate={handleFavoriteUpdate} />
    </>
  );
};

export default Favorites;
