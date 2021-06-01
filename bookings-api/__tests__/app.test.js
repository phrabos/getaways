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

  test('gets a place by ID', async () => {
    const place = await agent
      .get('/api/v1/places/60b655bdbb56fc1fb858a525')

      expect(place.body).toEqual({
        "__v": 0, 
        "createdAt": expect.any(String),
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "id": "60b655bdbb56fc1fb858a525", 
        "image": "http://placeimg.com/1080/800", "image_thumbnail": "http://placeimg.com/400/400", "location": "2250 Bobbie Passage, Fayetteville, West Virginia, 58757-2561", "max_guests": 6, 
        "name": "Refined Suites", 
        "pet_friendly": expect.any(Boolean), 
        "pool": false, 
        "price_per_night": 612, 
        "slug": "refined-suites", 
        "updatedAt": expect.any(String), 
        "wifi": true});
  })
  test('updates a place by ID', async () => {
    const place = await agent
      .put('/api/v1/places/60b655bdbb56fc1fb858a525')
      .send({
        isFavorite: false,
      })


      expect(place.body).toEqual({
        "__v": 0, 
        "createdAt": expect.any(String),
        "description": "The automobile layout consists of a front-engine design, with transaxle-type transmissions mounted at the rear of the engine and four wheel drive",
        "id": "60b655bdbb56fc1fb858a525", 
        "image": "http://placeimg.com/1080/800", "image_thumbnail": "http://placeimg.com/400/400", "location": "2250 Bobbie Passage, Fayetteville, West Virginia, 58757-2561", "max_guests": 6, 
        "name": "Refined Suites", 
        "pet_friendly": false, 
        "pool": false, 
        "price_per_night": 612, 
        "slug": "refined-suites", 
        "updatedAt": expect.any(String), 
        "wifi": true});
  })
  test('gets all places', async () => {
    const place = await agent
      .get('/api/v1/places')

      expect(place.body.places).toEqual(expect.any(Array));
  })

})
