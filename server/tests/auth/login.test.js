const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());

// Assuming you have the necessary functions imported
jest.mock('../../models/user/user.model.js', () => {
  return {
    getUserByEmail: jest.fn(() => ({
      _id: '123',
      email: 'john.doe@example.com',
      password: '$2a$10$abcdefghij1234567890',
      refreshToken: [],
    })),
    getUserByRefreshToken: jest.fn(() => null),
  };
});

const { login } = require('../../controllers/auth.controller');
app.post('/api/auth/login', login);

describe('Login Controller', () => {
  let server;

  beforeAll(() => {
    server = app.listen(4002); // Changed port to 4002
  });

  afterAll((done) => {
    server.close(done);
  });

  // it('should log in a user with valid credentials', async () => {
  //   const response = await request(app).post('/api/auth/login').send({
  //     email: 'john.doe@example.com',
  //     password: 'password123', // Assuming this is the correct password
  //   });

  //   expect(response.status).toBe(200);
  //   expect(response.body.user).toBeDefined();
  //   expect(response.body.token).toBeDefined();
  // });

  it('should return 400 if email or password is missing', async () => {
    const response = await request(app).post('/api/auth/login').send({
      email: 'john.doe@example.com',
    });

    expect(response.status).toBe(400);
    expect(response.body.message).toBe('Email and password are required.');
  });

  it('should return 401 if email is not found', async () => {
    const response = await request(app).post('/api/auth/login').send({
      email: 'unknown@example.com',
      password: 'password123',
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Invalid email or password.');
  });

  it('should return 401 if password is incorrect', async () => {
    const response = await request(app).post('/api/auth/login').send({
      email: 'john.doe@example.com',
      password: 'wrongpassword',
    });

    expect(response.status).toBe(401);
    expect(response.body.message).toBe('Invalid email or password.');
  });

  it('should return 500 on internal server error', async () => {
    const getUserByEmailMock =
      require('../../models/user/user.model.js').getUserByEmail;
    getUserByEmailMock.mockImplementation(() => {
      throw new Error('Test error');
    });

    const response = await request(app).post('/api/auth/login').send({
      email: 'john.doe@example.com',
      password: 'password123',
    });

    expect(response.status).toBe(500);
    expect(response.body.message).toBe('Internal Server Error');
  });
});
