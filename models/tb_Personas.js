// models/tb_Personas.js
const { DataTypes } = require('sequelize');
const sequelize = require('./sequelizeConfig');
const TipoPersonaLegal = require('./tb_TipoPersonaLegal');
const Direcccion = require('./tb_Direcccion');

const Personas = sequelize.define('tb_Personas', {
  Celular: {
    type: DataTypes.STRING(15),
    primaryKey: true,
    allowNull: false,
  },
  Correo: {
    type: DataTypes.STRING(76),
    allowNull: false,
  },
  Direccion: {
    type: DataTypes.STRING(6),
    allowNull: false,
  },
  TipoPersonaLegal: {
    type: DataTypes.STRING(4),
    allowNull: false,
  },
  Nombre: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
  Apellido: {
    type: DataTypes.STRING(45),
    allowNull: false,
  },
}, {
  tableName: 'tb_Personas',
});

Personas.belongsTo(TipoPersonaLegal, { foreignKey: 'TipoPersonaLegal', as: 'TipoPersonaLegal' });
Personas.belongsTo(Direcccion, { foreignKey: 'Direccion', as: 'Direccion' });

module.exports = Personas;
