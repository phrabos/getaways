/*

username: string
email: string
password_hash: string
password: string
created_at: datetime
updated_at: datetime

has_many: bookings
has_many: reviews

*/

const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const schema = new mongoose.Schema(
  {
    username: {type: String, unique: true},
    email: {type: String, unique: true},
    password: String,
    favorites: Array,
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        delete ret.password;
      },
    },
  }
);

schema.statics.authorize = async function ({ email, password }) {
  if(!email) throw new Error('Email Required')

  
  // check that user exists
  const user = await this.findOne({ email });
  if (!user) throw new Error('Invalid Email');

  // check password match
  if (!bcrypt.compareSync(password, user.password))
    throw new Error('Invalid Password');

  // create jwt
  const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET, {
    expiresIn: '24h',
  });

  // return jwt
  return { token, user };
};

schema.statics.verify = async (token = '') => {
  if (!token) throw new Error('You must be signed in to continue');
  const decrypted = await jwt.verify(token, process.env.JWT_SECRET);
  return {
    id: decrypted._id,
    username: decrypted.username,
    email: decrypted.email,
  };
};

const User = mongoose.model('User', schema);

module.exports = User;
