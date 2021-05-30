import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { Button, Container, TextField, Typography } from '@material-ui/core';
import { getSinglePlace } from '../services/placesApi';
import { bookReservation } from '../services/bookingsApi';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 450,
    margin: '2px',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  cardLink: {
    textDecoration: 'none',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  cardSubHeader: {
    
    color: 'grey'
  }

}));

const GetawaysDetail = ({ match }) => {
  const [loading, setLoading] = useState(true);
  const [place, setPlace] = useState({});
  const [checkin, setCheckin] = useState('');
  const [checkout, setCheckout] = useState('');
  const classes = useStyles();

  useEffect(() => {
    setLoading(true);
    getSinglePlace(match.params.id)
      .then(setPlace)
      .finally(() => setLoading(false));
  }, []);

  const handleSumbit = async (e) => {
    e.preventDefault();
    const { start_date, end_date, total_price, message } = await bookReservation(match.params.id, checkin, checkout);

    if(!message) alert(`Your booking from ${start_date} to ${end_date} was a success. The total price is $${total_price}.`);

    if(message) alert(` Sorry, ${message}.`);

  };


  if(loading) return <h1>Loading...</h1>;
  return (
    <>
      <Container style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '10px',
        marginBottom: '20px',
      }}>
        <Typography 
          variant="h4"
          style={{ marginBottom: '20px' }}
        >Book Reservation</Typography>
        <form onSubmit={handleSumbit}>
          <TextField
            type="date"
            label="check-in"
            onChange={(e) => setCheckin(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <TextField
            type="date"
            label="check-out"
            onChange={(e) => setCheckout(e.target.value)}
            InputLabelProps={{
              shrink: true,
            }}
          />
          <Button onClick={handleSumbit} variant="contained" color="secondary">Submit</Button>
        </form>
      </Container>
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        <Card className={classes.root}>
          {place.pool && <CardHeader
            disableTypography={true}
            title={<Typography variant="h6" >{place.name}</Typography>}
            subheader={<Typography variant={'body2'} className={classes.cardSubHeader}>Has a pool!</Typography>}
          />}
          {!place.pool && <CardHeader
            disableTypography={true}
            title={<Typography variant="h6" >{place.name}</Typography>}
            subheader={<Typography 
              variant={'body2'} 
              className={classes.cardSubHeader}
              style={{ visibility: 'hidden' }}
            >Has a pool!</Typography>}
          />}
          <CardMedia 
            className={classes.media}
            image={place.image}
            title={place.name}
          />
          <CardContent>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
            >
              {place.description}
            </Typography>
            <br/>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {place.location}
            </Typography>
            <br/>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >
            Price per Night ${place.pricePerNight}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >
            Max Guests: {place.maxGuests}
            </Typography>
          </CardContent>       
        </ Card>
      </div>
     
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

