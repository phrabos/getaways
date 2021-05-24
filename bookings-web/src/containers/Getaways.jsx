import React, { useState, useEffect } from 'react';
import { getPlaces } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import { Button, Container, Typography } from '@material-ui/core';

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
        
        <Container
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            {page > 1 && <Button
              onClick={handlePrevPage} 
              variant="contained" 
              color="secondary" 
              style={{ display: 'inline', marginRight: '10px', marginTop: '5px' }}
            >Prev</Button>}
            {page === 1 && <Button
              onClick={handlePrevPage} 
              variant="disabled" 
              // color="secondary" 
              style={{ display: 'inline', marginRight: '10px', marginTop: '5px' }}
            >
        Prev
            </Button>}
            {page < Math.ceil(places.length / 24) && <Button
              onClick={handleNextPage}  
              variant="contained" 
              color="secondary" 
              style={{ display: 'inline', marginTop: '5px' }}
            >
          Next
            </Button>}
            {page === Math.ceil(places.length / 24) && <Button
              onClick={handleNextPage}  
              variant="disabled" 
              color="secondary" 
              style={{ display: 'inline', marginTop: '5px' }}
            >
          Next
            </Button>}
          </Container>
          <Typography 
            variant="body2"
            style={{ display:'block' }} 
          >  Page {page} / {Math.ceil(places.length / 24)}
          </Typography>
        </Container>
      </div>
      <PlaceList places={places} page={page} />
    </>
  );
};

export default Getaways;
