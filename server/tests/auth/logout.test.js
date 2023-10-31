const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());

jest.mock('../../models/user/user.model.js', () => {
  return {
    getUserByRefreshToken: jest.fn(),
  };
});

const { logout } = require('../../controllers/auth.controller');
app.post('/api/auth/logout', logout);

describe('Logout Controller', () => {
  let server;

  beforeAll(() => {
    server = app.listen(4002);
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should log out a user with a valid JWT token', async () => {
    const getUserByRefreshTokenMock =
      require('../../models/user/user.model.js').getUserByRefreshToken;
    getUserByRefreshTokenMock.mockResolvedValueOnce({
      _id: '123',
      refreshToken: ['valid_token'],
    });

    const response = await request(app)
      .post('/api/auth/logout')
      .set('Cookie', ['jwt=valid_token']);

    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
  });

  it('should return a 204 status if no JWT token is present', async () => {
    const response = await request(app).post('/api/auth/logout');

    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
  });

  it('should log out a user with an invalid JWT token', async () => {
    const getUserByRefreshTokenMock =
      require('../../models/user/user.model.js').getUserByRefreshToken;
    getUserByRefreshTokenMock.mockResolvedValueOnce(null);

    const response = await request(app)
      .post('/api/auth/logout')
      .set('Cookie', ['jwt=invalid_token']);

    expect(response.status).toBe(204);
    expect(response.body).toEqual({});
  });

//  it('should handle errors during logout', async () => {
//    // Mock the function to throw an error
//    const getUserByRefreshTokenMock =
//      require('../../models/user/user.model.js').getUserByRefreshToken;
//    getUserByRefreshTokenMock.mockImplementation(() => {
//      throw new Error('Test error');
//    });

//    const response = await request(app)
//      .post('/api/auth/logout')
//      .set('Cookie', ['jwt=valid_token']);

//    expect(response.status).toBe(500);
//    expect(response.body.message).toBe('Internal Server Error');
//  });
});
