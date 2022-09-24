const { app } = require('./app');
const dotenv = require('dotenv');
dotenv.config();
//function that starts the server
const startServer = () => {
  const PORT = process.env.PORT || 3001;
  app.listen(PORT, () => {
    console.log(`Started your server on port: ${PORT}`);
  });
};
startServer();
