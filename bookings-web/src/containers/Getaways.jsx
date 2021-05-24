import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import { Button } from '@material-ui/core';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getPlaces()
      .then(setPlaces)
      .finally(() => setLoading(false));
    console.log(page);
  }, [page]);

  const handlePrevPage = () => {
    setPage(prevState => prevState - 1);
  };
  const handleNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <Button
          onClick={handlePrevPage} 
          variant="contained" 
          color="secondary" 
          style={{ display: 'inline', marginRight: '10px', marginTop: '5px' }}
        >
          Prev
        </Button>
        <Button
          onClick={handleNextPage}  
          variant="contained" 
          color="secondary" 
          style={{ display: 'inline', marginTop: '5px' }}
        >
          Next
        </Button>
      </div>
      <PlaceList places={places} page={page} />
    </>
  );
};

export default Getaways;
