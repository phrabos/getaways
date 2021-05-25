import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import { CardActionArea, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 450,
    margin: '2px',
    textDecoration: 'none',
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

const Place = ({
  id,
  name,
  description,
  location,
  pricePerNight,
  image,
  maxGuests,
  // petFriendly,
  pool,
  // wifi,
}) => {

  const classes = useStyles();

  return (
    <>
      <Card component={Link} to={`/places/${id}`} className={classes.root}>
        <CardActionArea>
          {pool && <CardHeader
            disableTypography={true}
            title={<Typography variant="h6" >{name}</Typography>}
            subheader={<Typography variant={'body2'} className={classes.cardSubHeader}>Has a pool!</Typography>}
          />}
          {!pool && <CardHeader
            disableTypography={true}
            title={<Typography variant="h6" >{name}</Typography>}
            subheader={<Typography 
              variant={'body2'} 
              className={classes.cardSubHeader}
              style={{ visibility: 'hidden' }}
            >Has a pool!</Typography>}
          />}
          <CardMedia 
            className={classes.media}
            image={image}
            title={name}
          />
          <CardContent>
            <Typography
              variant="body1"
              color="textSecondary"
              component="p"
            >
              {description}
            </Typography>
            <br/>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {location}
            </Typography>
            <br/>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >
            Price per Night ${pricePerNight}
            </Typography>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
            >
            Max Guests: {maxGuests}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon color="secondary" />
          </IconButton>
        </CardActions>
      </ Card>
    </>
  );
};

Place.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  // imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  // petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  // wifi: PropTypes.bool.isRequired,
};

export default Place;
