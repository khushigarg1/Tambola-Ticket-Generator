// ticket.js
const { sequelize, DataTypes } = require('../config/db');
const Set = require('./set');

const Ticket = sequelize.define('tambola_ticket', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  ticket_data: {
    type: DataTypes.JSON,
    allowNull: false,
  },
});

Ticket.belongsTo(Set, { foreignKey: 'set_id' });

module.exports = Ticket;
