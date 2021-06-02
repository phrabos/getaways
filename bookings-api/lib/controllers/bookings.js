const { Router } = require('express');
const verifyToken = require('../utils/verify-token');

const Booking = require('../models/Booking');
const Place = require('../models/Place');

module.exports = Router()
  .post('/create', verifyToken, async (req, res, next) => {
    try {
      const start_date = new Date(req.body.start_date);
      const end_date = new Date(req.body.end_date);

      if (start_date > end_date) {
        throw new Error('Start date must be before the end date');
      }

      const total_nights = Math.round(
        (end_date - start_date) / (1000 * 60 * 60 * 24)
      );
      const place = await Place.findOne({ _id: req.body.place_id }).exec();

      const existing_bookings = await Booking.find({
        place_id: place._id,
        start_date: { $lt: end_date },
        end_date: { $gt: start_date },
      }).exec();

      if (existing_bookings.length) {
        throw new Error(`${place.name} is already booked for that night`);
      }

      const booking = await Booking.create({
        user_id: req.user.id,
        place_id: place._id,
        start_date: start_date,
        end_date: end_date,
        state: 'reserved',
        total_price: place.price_per_night * total_nights,
      });

      res.json(booking);
    } catch (err) {
      next(err);
    }
  })
  .get('/', verifyToken, async (req, res, next) => {
    const bookings = await Booking.find({ user_id: req.user.id }).exec();
    // console.log(bookings);
    const placesList = await Promise.all(bookings.map(booking => (
     Place.findOne({ _id: booking.place_id })
    )));
    const mappedList = placesList.map((_, i) => {
      return ({
        bookingId: bookings[i]._id,
        totalPrice: bookings[i].total_price,
        name: placesList[i].name,
        location: placesList[i].location,
        image: placesList[i].image_thumbnail,
      })
    })
    console.log(mappedList)
    res.json(mappedList);
  })
  .get('/all', async (req, res, next) => {
    const bookings = await Booking.find().exec();
    res.json(bookings);
  })
  .get('/:id', verifyToken, async (req, res, next) => {
    const booking = await Booking.findOne({ _id: req.params.id }).exec();
    res.send(booking);
  })
  .delete('/:id', verifyToken, async (req, res, next) => {
    const id = req.params.id
    const booking = await Booking.deleteOne({ _id: id })
    res.json({message: 'booking cancelled', booking});
  })
  .put('/:id', verifyToken, async (req, res, next) => {
    res.send('Updated');
  });
