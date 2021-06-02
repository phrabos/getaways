const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
app.use(cookieParser());

app.use('/api/v1/favorites', require('./controllers/favorites'));
app.use('/api/v1/bookings', require('./controllers/bookings'));
app.use('/api/v1/places', require('./controllers/places'));
// app.use('/api/v1/reviews', require('./controllers/reviews'));
app.use('/api/v1/users', require('./controllers/users'));

app.use(require('./middleware/not-found'));
app.use(require('./middleware/error'));

module.exports = app;
