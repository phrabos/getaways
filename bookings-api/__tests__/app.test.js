const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');

const agent = request.agent(app);
let cookie;


describe('Bookings API routes', () => {
  beforeAll(() => {
    const url = process.env.MONGODB_URI;
    mongoose.connect(url, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  });
  beforeAll( async () => {
    const res = await agent
    .post('/api/v1/users/login')
    .send({
      email: 'test@test.com',
      password: '1234',
    })

    cookie = res.headers['set-cookie'][0].split(';')[0]

  })
  afterAll(() => { 
    mongoose.connection.close();
    mongoose.disconnect();
  })

  test('logs a user in', async () => {
    const user = await request(app)
      .post('/api/v1/users/login')
      .send({
        email: 'test@test.com',
        password: '1234',
      })

      expect(user.body).toEqual({
      "token": expect.any(String),  
      "user": {"__v": 0, 
        "_id": expect.any(String), 
        "createdAt": expect.any(String), 
        "email": "test@test.com", 
        "updatedAt": expect.any(String), 
        "username": expect.any(String), 
      }
    })
  })

  test('updates a user\'s email and username', async () => {
    
    const user = await agent
      .put('/api/v1/users/update')
      .send({
        newUsername: 'Patrick5',
        oldEmail: 'test@test.com'
      })
      .set('Cookie', cookie)

    expect(user.body).toEqual({
      "token": expect.any(String), 
      "user": {
        "__v": 0, 
        "_id": expect.any(String), 
        "createdAt": expect.any(String), 
        "email": "test@test.com", 
        "updatedAt": expect.any(String), 
        "username": "Patrick5"
      }
    })
  })

    test('logs a user out', async () => {
      const user = await request(app)
        .get('/api/v1/users/logout')
  
        expect(user.body).toEqual({ 
          success: true, 
          message: 'Logged out succcessfully!' 
        })
        expect(user.headers['set-cookie']).toEqual(["session=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT"])
  })

})
