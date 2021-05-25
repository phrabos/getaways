const { Router } = require('express');
const verifyToken = require('../utils/connect');
const Place = require('../models/Place');

module.exports = Router()
  .get('/', async (req, res, next) => {
    const places = await Place.find().exec();
    res.json(places);
  })
  // .get('/:id', async (req, res, next) => {
  //   const place = await Place.findOne({ _id: req.params.id });
  //   res.json(place);
  // })
  .put('/:id', async (req, res, next) => {
    console.log(req.params.id)
    const place = await Place.findOneAndUpdate({ _id: req.params.id }, { pet_friendly: req.body.isFavorite}, { new: true });
    console.log(place)
    res.json(place);
  });

