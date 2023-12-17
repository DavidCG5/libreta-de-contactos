// models/tb_TipoPersonaLegal.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeConfig');

const TipoPersonaLegal = sequelize.define('tb_TipoPersonaLegal', {
  id_TipoPersona: {
    type: DataTypes.STRING(4),
    primaryKey: true,
    allowNull: false,
  },
  TipoPersonaLegal: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'tb_TipoPersonaLegal',
});

module.exports = TipoPersonaLegal;
