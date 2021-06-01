const { Router } = require('express');
const verifyToken = require('../utils/connect');
const Place = require('../models/Place');

module.exports = Router()
  .get('/', async (req, res, next) => {
    const count = await Place.countDocuments();
    const { page, limit } = req.query;
    if(!limit && !page){
      const places = await Place.find().exec();
      res.json({
        count,
        places
      })
    }
    if(limit && !page){
      const places = await Place.find()
      .limit(limit * 1)
      .exec();
      res.json({
        count: limit,
        places
      });
    }
    if(limit && page){
      const places = await Place.find()
      .limit(limit * 1)
      .skip((page - 1) * limit)
      .exec();
      res.json({
        count: limit,
        totalPages: Math.ceil(count / limit),
        currentPage: page,
        places
      });
    }

  })
  .get('/:id', async (req, res, next) => {
    const place = await Place.findOne({ _id: req.params.id });
    res.json(place);
  })
  .put('/:id', async (req, res, next) => {
    const place = await Place.findOneAndUpdate({ _id: req.params.id }, { pet_friendly: req.body.isFavorite}, { new: true });
    console.log(place)
    res.json(place);
  });

