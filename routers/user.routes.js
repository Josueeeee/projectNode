const express = require('express');

const userRoute = express.Router();

userRoute.post('/signup');
userRoute.post('/login');

module.exports = {
  userRoute,
};
