// backend/controllers/personaController.js
const Persona = require('../models/persona');

exports.getAllPeople = async (req, res) => {
  try {
    const personas = await Persona.findAll();
    res.json(personas);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las personas.' });
  }
};

exports.getPersonById = async (req, res) => {
  const { celular } = req.params;
  try {
    const persona = await Persona.findByPk(celular);
    if (persona) {
      res.json(persona);
    } else {
      res.status(404).json({ error: 'Persona no encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la persona.' });
  }
};

exports.createPerson = async (req, res) => {
  const { celular, correo, direccionId, tipoPersonaLegalId, nombre, apellido } = req.body;
  try {
    const nuevaPersona = await Persona.create({
      celular,
      correo,
      direccionId,
      tipoPersonaLegalId,
      nombre,
      apellido,
    });
    res.status(201).json(nuevaPersona);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la persona.' });
  }
};

exports.updatePerson = async (req, res) => {
  const { celular } = req.params;
  const { correo, direccionId, tipoPersonaLegalId, nombre, apellido } = req.body;
  try {
    const persona = await Persona.findByPk(celular);
    if (persona) {
      await persona.update({ correo, direccionId, tipoPersonaLegalId, nombre, apellido });
      res.json(persona);
    } else {
      res.status(404).json({ error: 'Persona no encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la persona.' });
  }
};

exports.deletePerson = async (req, res) => {
  const { celular } = req.params;
  try {
    const persona = await Persona.findByPk(celular);
    if (persona) {
      await persona.destroy();
      res.json({ message: 'Persona eliminada correctamente.' });
    } else {
      res.status(404).json({ error: 'Persona no encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la persona.' });
  }
};
