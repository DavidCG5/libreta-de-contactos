// backend/controllers/ciudadController.js
const Ciudad = require('../models/ciudad');

exports.getAllCities = async (req, res) => {
  try {
    const ciudades = await Ciudad.findAll();
    res.json(ciudades);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las ciudades.' });
  }
};

exports.getCityById = async (req, res) => {
    const { id } = req.params;
    try {
      const ciudad = await Ciudad.findByPk(id);
      if (ciudad) {
        res.json(ciudad);
      } else {
        res.status(404).json({ error: 'Ciudad no encontrada.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al obtener la ciudad.' });
    }
  };
  
  exports.createCity = async (req, res) => {
    const { nombre } = req.body;
    try {
      const nuevaCiudad = await Ciudad.create({ nombre });
      res.status(201).json(nuevaCiudad);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al crear la ciudad.' });
    }
  };
  
  exports.updateCity = async (req, res) => {
    const { id } = req.params;
    const { nombre } = req.body;
    try {
      const ciudad = await Ciudad.findByPk(id);
      if (ciudad) {
        await ciudad.update({ nombre });
        res.json(ciudad);
      } else {
        res.status(404).json({ error: 'Ciudad no encontrada.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al actualizar la ciudad.' });
    }
  };
  
  exports.deleteCity = async (req, res) => {
    const { id } = req.params;
    try {
      const ciudad = await Ciudad.findByPk(id);
      if (ciudad) {
        await ciudad.destroy();
        res.json({ message: 'Ciudad eliminada correctamente.' });
      } else {
        res.status(404).json({ error: 'Ciudad no encontrada.' });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Error al eliminar la ciudad.' });
    }
  };
