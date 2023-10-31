const request = require('supertest');
const express = require('express');
const app = express();

app.use(express.json());

// Assuming you have the necessary functions imported
jest.mock('../../models/user/user.model.js', () => {
  return {
    getUserByEmail: jest.fn(),
  };
});

const { resetPassword } = require('../../controllers/auth.controller');
app.post('/api/auth/reset-password', resetPassword);

describe('Reset Password Controller', () => {
  let server;

  beforeAll(() => {
    server = app.listen(4002); // Changed port to 4002
  });

  afterAll((done) => {
    server.close(done);
  });

  // it('should reset the password for an existing user', async () => {
  //   const email = 'john.doe@example.com';
  //   const password = 'newpassword123';

  //   // Mocking getUserByEmail to return an existing user
  //  const getUserByEmailMock =
  //    require('../../models/user/user.model.js').getUserByEmail;
  //  getUserByEmailMock.mockImplementation(() => ({
  //    firstName: 'John',
  //    lastName: 'Doe',
  //    email: 'john.doe@example.com',
  //  }));

  //   const response = await request(app)
  //     .post('/api/auth/reset-password')
  //     .send({ email, password });

  //   expect(response.status).toBe(200);
  //   expect(response.body.message).toBe('Password reset successful');
  // });

  it('should return 404 if user does not exist', async () => {
    const email = 'unknown@example.com';
    const password = 'newpassword123';

    // Mocking getUserByEmail to return null (user not found)
    const getUserByEmailMock =
      require('../../models/user/user.model.js').getUserByEmail;
    getUserByEmailMock.mockResolvedValueOnce(null);

    const response = await request(app)
      .post('/api/auth/reset-password')
      .send({ email, password });

    expect(response.status).toBe(404);
    expect(response.body.message).toBe('User does not exists');
  });

  it('should handle errors during password reset', async () => {
    const email = 'john.doe@example.com';
    const password = 'newpassword123';

    // Mocking getUserByEmail to throw an error
    const getUserByEmailMock =
      require('../../models/user/user.model.js').getUserByEmail;
    getUserByEmailMock.mockRejectedValueOnce(new Error('Test error'));

    const response = await request(app)
      .post('/api/auth/reset-password')
      .send({ email, password });

    expect(response.status).toBe(500);
    expect(response.body.message).toBe(
      'Error occured while reseting the password'
    );
  });
});
