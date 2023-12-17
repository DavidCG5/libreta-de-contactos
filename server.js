// server.js
const express = require('express');
const bodyParser = require('body-parser');
const { Sequelize } = require('sequelize');


const direccionRoutes = require('./routes/direcciones');
const tipoPersonaLegalRoutes = require('./routes/tipopersonalegal');
const personaRoutes = require('./routes/contactos');
const ciudadRoutes = require('./routes/ciudades');
const paisRoutes = require('./routes/paises');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Conexión a la base de datos
const sequelize = new Sequelize('mydb', 'root', 'kikaren01*', {
  host: 'localhost',
  dialect: 'mysql',
  define: {
    timestamps: false,
  },
});

//modelos
const Direccion = require('./models/tb_Dirreccion')(sequelize);
const TipoPersonaLegal = require('./models/tb_TipoPersonaLegal')(sequelize);
const Persona = require('./models/tb_Personas')(sequelize);
const Ciudad = require ('./models/tb_Ciudades')(sequelize);

//rutas
app.use('/direcciones', direccionRoutes);
app.use('/tipos-persona-legal', tipoPersonaLegalRoutes);
app.use('/personas', personaRoutes);
app.use('/ciudades', ciudadRoutes);
app.use('/paises', paisRoutes);

// Iniciar conexión a la base de datos y luego iniciar el servidor
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
});
