const { sequelize, DataTypes } = require('sequelize');
const dotenv = require('dotenv');
dotenv.config();
const db = new sequelize({
  dialect: `postgres`,
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
  database: process.env.DB,
  logging: true,
});

module.exports = {
  db,
  DataTypes,
};
