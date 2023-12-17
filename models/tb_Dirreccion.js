// models/tb_Direcccion.js
const { DataTypes } = require('sequelize');
const sequelize = require('../sequelizeConfig');
const Ciudades = require('./tb_Ciudades');
const Pais = require('./tb_Pais');

const Direcccion = sequelize.define('tb_Direccion', {
  id_Direccion: {
    type: DataTypes.STRING(6),
    primaryKey: true,
    allowNull: false,
  },
  Direccion: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  id_Ciudad: {
    type: DataTypes.STRING(6),
    allowNull: false,
  },
  id_Pais: {
    type: DataTypes.STRING(3),
    allowNull: false,
  },
}, {
  tableName: 'tb_Direccion',
});

Direcccion.belongsTo(Ciudades, { foreignKey: 'id_Ciudad', as: 'Ciudad' });
Direcccion.belongsTo(Pais, { foreignKey: 'id_Pais', as: 'Pais' });

module.exports = Direcccion;
