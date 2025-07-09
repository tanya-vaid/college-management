const { Sequelize, DataTypes } = require("sequelize");
const con = require("../database/dbconfig");

const Subject = con.define("subject", {
  eno: {
    type: DataTypes.INTEGER,
    required: true,
  },
  s1: {
    type: DataTypes.STRING,
    required: true,
  },
  s2: {
    type: DataTypes.STRING,
    required: true,
  },
  s3: {
    type: DataTypes.STRING,
    required: true,
  },
  s4: {
    type: DataTypes.STRING,
    required: true,
  },
  s5: {
    type: DataTypes.STRING,
    required: true,
  },
  s6: {
    type: DataTypes.STRING,
    required: true,
  },
});

module.exports = Subject;
