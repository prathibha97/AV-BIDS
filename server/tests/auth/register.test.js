const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());

jest.mock('../../models/user/user.model.js', () => {
  return {
    getUserByEmail: jest.fn(() => null),
    createUser: jest.fn(() => ({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    })),
  };
});

const { register } = require('../../controllers/auth.controller');
app.post('/api/auth/register', register);

describe('Register Controller', () => {
  let server;

  beforeAll(() => {
    server = app.listen(4001); // Changed port to 4001
  });

  afterAll((done) => {
    server.close(done);
  });

  it('should register a new user', async () => {
    const response = await request(app).post('/api/auth/register').send({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      userType: 'PLANNER',
    });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('firstName', 'John');
  });

  it('should return 400 if any field is missing', async () => {
    const response = await request(app).post('/api/auth/register').send({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
    });

    expect(response.status).toBe(400);
    expect(response.body).toBe('All fields are required');
  });

  it('should return 500 on internal server error', async () => {
    const createUserMock =
      require('../../models/user/user.model.js').createUser;
    createUserMock.mockImplementation(() => {
      throw new Error('Test error');
    });

    const response = await request(app).post('/api/auth/register').send({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      userType: 'PLANNER',
    });

    expect(response.status).toBe(500);
  });

  it('should return 409 if user is already registered', async () => {
    const getUserByEmailMock =
      require('../../models/user/user.model.js').getUserByEmail;
    getUserByEmailMock.mockImplementation(() => ({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
    }));

    const response = await request(app).post('/api/auth/register').send({
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password123',
      userType: 'PLANNER',
    });

    expect(response.status).toBe(409);
    expect(response.body).toBe('User with this email already exists');
  });
});
