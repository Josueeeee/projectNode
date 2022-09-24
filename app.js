console.clear();
const express = require('express');
const { userRoute } = require('./routers/user.routes');

//initializing the variable with express
const app = express();

//Middleware
app.use(express.json());

//Endpoints
app.use('/api/v1/users', userRoute);

app.all('*', (req, res) => {
  res.status(404).json({
    status: 'error',
    message: `${req.method} ${req.url} does not exists in our server`,
  });
});
module.exports = {
  app,
};
