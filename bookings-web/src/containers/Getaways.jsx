import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import Login from './Login';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getPlaces()
      .then(setPlaces)
      .finally(() => setLoading(false));
  
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
    
      <Login />
      <PlaceList places={places} />
    </>
  );
};

export default Getaways;
