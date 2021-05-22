import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import { Button } from '@material-ui/core';

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
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Button variant="contained" color="secondary" style={{ display: 'inline', marginRight: '10px', marginTop: '5px' }}>Prev</Button>
        <Button variant="contained" color="secondary" style={{ display: 'inline', marginTop: '5px' }}>Next</Button>
      </div>
      <PlaceList places={places} />
    </>
  );
};

export default Getaways;
