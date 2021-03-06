const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { Router } = require('express');
const User = require('../models/User');
const verifyToken = require('../utils/verify-token');

const ONE_DAY_IN_MS = 1000 * 60 * 60 * 24;

module.exports = Router()
.get('/', verifyToken, async (req, res, next) => {
  const { email } = req.user;
  const user = await User.findOne({ email })
  res.json(user)
})
  .get('/all', async (req, res, next) => {
    const users = await User.find({}).exec();
    res.json(users);
  })
  .put('/update', verifyToken, async (req, res, next) => {
    const { username } = req.user
    // console.log(username)
    // console.log(req.body)
    const email = req.body.oldEmail
    const newEmail = req.body.newEmail || email
    const newUsername = req.body.newUsername || username

    const user = await User.findOneAndUpdate({ email }, { email: newEmail, username: newUsername }, { new: true })

    // console.log('user', user);

    const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
      expiresIn: '24h',
    });

    res.cookie('session', token, {
      // domain: '.app.localhost',
      httpOnly: true,
      maxAge: ONE_DAY_IN_MS,
      // sameSite: 'Lax' | 'None' | 'Strict',
      sameSite: 'None',
      secure: true
    });

    res.json({ user, token })
  })  
  .post('/create', async (req, res, next) => {
    const email = req.body.email;
    const username = req.body.username;
    const password = bcrypt.hashSync(req.body.password, 10);
    const uniqueEmail = await User.findOne({ email }, );
    const uniqueUsername = await User.findOne({ username }, );
    if(uniqueEmail) res.send({status: 501, message: 'email already used'})
    if(uniqueUsername) res.send({status: 501, message: 'username already used'})

    try {
      const user = await User.create({
        username,
        email,
        password,
      });
      res.send(user);
    } catch (err) {
      next(err);
    }
  })
  .post('/login', async (req, res, next) => {
    // if(!req.body.email)res.send('Email Required')
    try {
      const { token, user } = await User.authorize(req.body);

      res.cookie('session', token, {
        // domain: '.app.localhost',
        httpOnly: true,
        maxAge: ONE_DAY_IN_MS,
        // sameSite: 'Lax' | 'None' | 'Strict',
        sameSite: 'None',
        secure: true
      });

      res.send({user, token});
    } catch (err) {
      err.status = 401;
      next(err);
    }
  })
  .get('/logout', async (req, res, next) => {
    res.clearCookie('session');
    res
      .status(200)
      .json({ success: true, message: 'Logged out succcessfully!' });
  })
  // .get('/:id', async (req, res, next) => {
  //   try {
  //     const user = await User.findOne({ _id: req.params.id });
  //     res.send(user);
  //   } catch (err) {
  //     next(err);
  //   }
  // })

