// models/tb_Ciudades.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig');

const Ciudades = sequelize.define('tb_Ciudades', {
  id_Ciudad: {
    type: DataTypes.STRING(6),
    primaryKey: true,
    allowNull: false,
  },
  Ciudad: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'tb_Ciudades',
});

module.exports = Ciudades;
