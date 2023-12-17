// sequelizeConfig.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('mydb', 'root', 'kikaren01', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

module.exports = sequelize;
