const { Sequelize, DataTypes } = require("sequelize");
const con = require("../database/dbconfig");

const User = con.define("user", {
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
  },
 
  password: {
    type: DataTypes.STRING,
    required: true,
    },
    role: {
        type: DataTypes.STRING,
        required:true,
  }
   
});

module.exports = User;
