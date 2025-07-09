const { Sequelize, DataTypes } = require("sequelize");
const con = require("../database/dbconfig");

const Student = con.define("student", {
  name: {
    type: DataTypes.STRING,
    required: true,
  },
  email: {
    type: DataTypes.STRING,
    required: true,
  },
  address: {
    type: DataTypes.STRING,
    required: true,
  },
  course: {
    type: DataTypes.STRING,
    required: true,
  },
  streme: {
    type: DataTypes.STRING,
    required: true,
  },
  password: {
    type: DataTypes.STRING,
    required: true,
  },
  eno: {
    type: DataTypes.INTEGER,
    required: true,
  },
});

module.exports = Student;
