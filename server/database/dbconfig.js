const Sequelize = require("sequelize");
require("dotenv").config();
const con = new Sequelize(
  process.env.DB_NAME,
  process.env.USER_NAME,
  process.env.PASSWORD,
  {
    host: process.env.HOST_NAME,
    dialect: process.env.DIALECT,
  }
);

module.exports = con;
