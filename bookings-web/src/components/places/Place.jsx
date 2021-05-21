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
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 450,
    margin: '2px',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },

}));

const Place = ({
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
      <Card className={classes.root}>
        <CardHeader 
          title={name}
          subheader={pool ? 'Has a Pool!' : ' .'}
        />
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
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  pricePerNight: PropTypes.number.isRequired,
  image: PropTypes.string.isRequired,
  imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  wifi: PropTypes.bool.isRequired,
};

export default Place;
