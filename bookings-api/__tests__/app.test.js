const mongoose = require('mongoose');
const request = require('supertest');
const app = require('../lib/app');


describe('Bookings API routes', () => {
  beforeEach(() => {
    const url = process.env.MONGODB_URI;
    mongoose.connect(url, {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
  });
  afterAll(() => { 
    mongoose.connection.close()
  })
  // afterAll(() => mongoose.disconnect);

  test.skip('updates a user\'s email and username', async () => {
    const user = await request(app)
      .put('/api/v1/users/update')
      .send({
        newUsername: 'Patrick5',
        oldEmail: 'test@test.com'
      })
    .set('Cookie', 'session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE3MTE0NGE4NmY0N2M2OTRhNGQyNTIiLCJ1c2VybmFtZSI6InBhdHJpY2stdXBkYXRlLWNsaWVudCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImNyZWF0ZWRBdCI6IjIwMjEtMDUtMjFUMDE6NDc6NDguOTU1WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDUtMjlUMTQ6NDA6NDguOTQwWiIsIl9fdiI6MCwiaWF0IjoxNjIyMjk5MjQ5LCJleHAiOjE2MjIzODU2NDl9.M8u2Q_mtuxKe0x3Af87vaqD32GXu9oBuAdqS_zCGnc0')


    expect(user.body).toEqual({
      "token": expect.any(String), 
      "user": {"__v": 0, "_id": "60a71144a86f47c694a4d252", 
        "createdAt": "2021-05-21T01:47:48.955Z", 
        "email": "test@test.com", 
        "updatedAt": expect.any(String), 
        "username": "Patrick5"
      }
    })
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
      "user": {"__v": 0, "_id": "60a71144a86f47c694a4d252", 
        "createdAt": "2021-05-21T01:47:48.955Z", 
        "email": "test@test.com", 
        "updatedAt": expect.any(String), 
        "username": "Patrick"
      }
    })
  })
  //   test.only('logs a user out', async () => {
  //     const user = await request(app)
  //       .get('/api/v1/users/logout')
  //       .set('Cookie', 'session=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGE3MTE0NGE4NmY0N2M2OTRhNGQyNTIiLCJ1c2VybmFtZSI6InBhdHJpY2stdXBkYXRlLWNsaWVudCIsImVtYWlsIjoidGVzdEB0ZXN0LmNvbSIsImNyZWF0ZWRBdCI6IjIwMjEtMDUtMjFUMDE6NDc6NDguOTU1WiIsInVwZGF0ZWRBdCI6IjIwMjEtMDUtMjlUMTQ6NDA6NDguOTQwWiIsIl9fdiI6MCwiaWF0IjoxNjIyMjk5MjQ5LCJleHAiOjE2MjIzODU2NDl9.M8u2Q_mtuxKe0x3Af87vaqD32GXu9oBuAdqS_zCGnc0')
  
  //       expect(user.body).toEqual({ 
  //         success: true, 
  //         message: 'Logged out succcessfully!' 
  //       })
  // })

})
