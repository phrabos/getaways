import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Place from '../components/places/Place';
import { getSinglePlace } from '../services/placesApi';


const GetawaysDetail = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState({});

  useEffect(() => {
    setLoading(true);
    getSinglePlace(match.params.id)
      .then(setPlace)
      .finally(() => setLoading(false));
  }, []);

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <Place
        id={place.id} 
        name={place.name}
        description={place.description}
        location={place.location}
        pricePerNight={place.pricePerNight}
        image={place.image}
        maxGuests={place.maxGuests}
        pool={place.pool}
      />
    </>
  );
};

GetawaysDetail.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }).isRequired
  }).isRequired
};

export default GetawaysDetail;

