import React, { useState, useEffect } from 'react';
import ReservationsList from '../components/reservations/ReservationsList';
import { getReservations, cancelReservation } from '../services/bookingsApi';
import { Typography } from '@material-ui/core';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    getReservations()
      .then(setReservations)
      .finally(() => setLoading(false));
  }, []);

  const handleCancel = async (e) => {
    await cancelReservation(e.currentTarget.value);
    setLoading(true);
    getReservations()
      .then(setReservations)
      .finally(() => setLoading(false));
    // console.log(confirm);
  };

  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <Typography
        style={{ textAlign: 'center', marginBottom: '10px' }} 
        variant="h4">My Reservations!</Typography>
      <ReservationsList reservations={reservations} handleCancel={handleCancel}/>
    </>
  );
};

export default Reservations;
