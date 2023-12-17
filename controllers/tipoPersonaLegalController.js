// backend/controllers/tipoPersonaLegalController.js
const TipoPersonaLegal = require('../models/tipoPersonaLegal');

exports.getAllLegalPersonTypes = async (req, res) => {
  try {
    const tiposPersonaLegal = await TipoPersonaLegal.findAll();
    res.json(tiposPersonaLegal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener los tipos de persona legal.' });
  }
};

exports.getLegalPersonTypeById = async (req, res) => {
  const { id } = req.params;
  try {
    const tipoPersonaLegal = await TipoPersonaLegal.findByPk(id);
    if (tipoPersonaLegal) {
      res.json(tipoPersonaLegal);
    } else {
      res.status(404).json({ error: 'Tipo de persona legal no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener el tipo de persona legal.' });
  }
};

exports.createLegalPersonType = async (req, res) => {
  const { tipo } = req.body;
  try {
    const nuevoTipoPersonaLegal = await TipoPersonaLegal.create({ tipo });
    res.status(201).json(nuevoTipoPersonaLegal);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear el tipo de persona legal.' });
  }
};

exports.updateLegalPersonType = async (req, res) => {
  const { id } = req.params;
  const { tipo } = req.body;
  try {
    const tipoPersonaLegal = await TipoPersonaLegal.findByPk(id);
    if (tipoPersonaLegal) {
      await tipoPersonaLegal.update({ tipo });
      res.json(tipoPersonaLegal);
    } else {
      res.status(404).json({ error: 'Tipo de persona legal no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar el tipo de persona legal.' });
  }
};

exports.deleteLegalPersonType = async (req, res) => {
  const { id } = req.params;
  try {
    const tipoPersonaLegal = await TipoPersonaLegal.findByPk(id);
    if (tipoPersonaLegal) {
      await tipoPersonaLegal.destroy();
      res.json({ message: 'Tipo de persona legal eliminado correctamente.' });
    } else {
      res.status(404).json({ error: 'Tipo de persona legal no encontrado.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar el tipo de persona legal.' });
  }
};
