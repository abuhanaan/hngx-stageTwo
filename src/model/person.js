const Sequelize = require("sequelize");
const sequelize = require("../db/connect");

const Person = sequelize.define("person", {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  gender: {
    type: Sequelize.STRING,
  },
  state: {
    type: Sequelize.STRING,
  },
  age: {
    type: Sequelize.INTEGER,
  },
  uniqueId: {
    type: Sequelize.STRING,
    unique: true,
  },
});

module.exports = Person;
