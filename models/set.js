// set.js
const { sequelize, DataTypes } = require('../config/db');

const Set = sequelize.define('tambola_set', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
});

module.exports = Set;
