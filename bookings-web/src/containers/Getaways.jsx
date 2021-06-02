import React, { useState, useEffect } from 'react';
import { addToFavorites, getPlaces, getFavoritesList, removeFavorite } from '../services/placesApi';
import PlaceList from '../components/places/PlaceList';
import { Button, Container, Typography } from '@material-ui/core';

const Getaways = () => {
  const [places, setPlaces] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);

  useEffect(() => {
    setLoading(true);
    getPlaces()
      .then(setPlaces);
    getFavoritesList()
      .then(setFavorites)
      .finally(() => setLoading(false));

  }, [page]);

 
  const handleFavoriteUpdate = (e) => {
    const isFave = favorites.find(fave => fave.placeId == e.currentTarget.value);
    if(isFave){
      removeFavorite(e.currentTarget.value)
        .then(() => getFavoritesList())
        .then(setFavorites);
    }
    else {
      addToFavorites(e.currentTarget.value)
        .then(() => getFavoritesList())
        .then(setFavorites);
    }
    // setLoading(true);

  };
  

  const handlePrevPage = () => {
    setPage(prevState => prevState - 1);
  };
  const handleNextPage = () => {
    setPage(prevState => prevState + 1);
  };

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      {/* {console.log('getaways', favorites)} */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
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
              disabled
              onClick={handlePrevPage} 
              variant="contained" 
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
              disabled
              onClick={handleNextPage}  
              variant="contained" 
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
      <PlaceList handleFavoriteUpdate={handleFavoriteUpdate} places={places} favorites={favorites} page={page} />
    </>
  );
};

export default Getaways;
