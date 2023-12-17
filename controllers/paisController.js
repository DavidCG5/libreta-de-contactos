// backend/controllers/paisController.js
const Pais = require('../models/pais');

exports.getCountryById = async (req, res) => {
  const { id } = req.params;
  try {
    const pais = await Pais.findByPk(id);
    if (pais) {
      res.json(pais);
    } else {
      res.status(404).json({ error: 'País no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el país.' });
  }
};

exports.createCountry = async (req, res) => {
  const { nombre } = req.body;
  try {
    const nuevoPais = await Pais.create({ nombre });
    res.status(201).json(nuevoPais);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el país.' });
  }
};

exports.updateCountry = async (req, res) => {
  const { id } = req.params;
  const { nombre } = req.body;
  try {
    const pais = await Pais.findByPk(id);
    if (pais) {
      await pais.update({ nombre });
      res.json(pais);
    } else {
      res.status(404).json({ error: 'País no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el país.' });
  }
};

exports.deleteCountry = async (req, res) => {
  const { id } = req.params;
  try {
    const pais = await Pais.findByPk(id);
    if (pais) {
      await pais.destroy();
      res.json({ message: 'País eliminado correctamente.' });
    } else {
      res.status(404).json({ error: 'País no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el país.' });
  }
};
