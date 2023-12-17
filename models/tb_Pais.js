// models/tb_Pais.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig');

const Pais = sequelize.define('tb_Pais', {
  id_Pais: {
    type: DataTypes.STRING(3),
    primaryKey: true,
    allowNull: false,
  },
  Pais: {
    type: DataTypes.STRING(56),
    allowNull: false,
  },
}, {
  tableName: 'tb_Pais',
});

module.exports = Pais;
