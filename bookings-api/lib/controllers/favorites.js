const { Router } = require('express');
const verifyToken = require('../utils/verify-token');
const Favorite = require('../models/Favorite');
const Place = require('../models/Place');

module.exports = Router()
  .get('/all', verifyToken, async (req, res, next) => {
      const places = await Favorite.find({ user_id: req.user.id });
      // console.log('/all', places)
      res.json(places)
  })
  .delete('/remove', verifyToken, async (req, res, next) => {
    const id = req.body.id;
    const userId = req.user.id;
    const removedFavorite = await Favorite.deleteOne({ place_id: id, user_id: userId });
    res.json(removedFavorite);
    // console.log('id: ', id)
    // console.log('userId: ', userId)
    // console.log('removed ', removedFavorite)
  })
  .post('/', verifyToken, async (req, res, next) => {
    const id = req.body.id
    const favoriteFound = await Place.findById(id)
    // console.log('fave found', favoriteFound)
    const favoriteAdd = await Favorite.create({ 
      user_id: req.user.id,
      place_id: favoriteFound._id,
      name: favoriteFound.name,
      description: favoriteFound.description,
      location: favoriteFound.location,
      price_per_night: favoriteFound.price_per_night,
      image: favoriteFound.image,
      image_thumbnail: favoriteFound.image_thumbnail,
      max_guests: favoriteFound.max_guests,
      pet_friendly: favoriteFound.pet_friendly,
      pool: favoriteFound.pool,
      wifi: favoriteFound.wifi,

    });
    // console.log(favoriteAdd)
    res.json(favoriteAdd);
  });

