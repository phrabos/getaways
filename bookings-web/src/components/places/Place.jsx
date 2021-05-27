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
import { addToFavorites } from '../../services/placesApi';

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

const Place = ({
  id,
  name,
  description,
  location,
  pricePerNight,
  image,
  maxGuests,
  petFriendly,
  pool,
  handleFavoriteUpdate,
  // wifi,
}) => {
  const classes = useStyles();
  // const didMount = useRef(false);

  // useEffect(() => {
  //   if(didMount.current){
  //     addToFavorites(id, favorite);
  //   } 
  //   else didMount.current = true;
  // }, [favorite]);

  const handleFavorite = async () => {
    const response = await addToFavorites(id, petFriendly ? false : true); 
    handleFavoriteUpdate(response);
  };

  return (
    <>
      <Card className={classes.root}>
        <CardActionArea component={Link} to={`/places/${id}`}>
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
          <IconButton 
            aria-label="add to favorites"
            name={id}
            value={petFriendly}
            onClick={handleFavorite}
          >
            {petFriendly && <FavoriteIcon 
              color="secondary"
            />}
            {!petFriendly && <FavoriteIcon 
              color="disabled"
            />}
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
  handleFavoriteUpdate: PropTypes.func.isRequired,
  // imageThumbnail: PropTypes.string.isRequired,
  maxGuests: PropTypes.number.isRequired,
  petFriendly: PropTypes.bool.isRequired,
  pool: PropTypes.bool.isRequired,
  // wifi: PropTypes.bool.isRequired,
};

export default Place;
