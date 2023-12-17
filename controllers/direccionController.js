// backend/controllers/direccionController.js
const Direccion = require('../models/direccion');

exports.getAllAddresses = async (req, res) => {
  try {
    const direcciones = await Direccion.findAll();
    res.json(direcciones);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener las direcciones.' });
  }
};

exports.getAddressById = async (req, res) => {
  const { id } = req.params;
  try {
    const direccion = await Direccion.findByPk(id);
    if (direccion) {
      res.json(direccion);
    } else {
      res.status(404).json({ error: 'Dirección no encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al obtener la dirección.' });
  }
};

exports.createAddress = async (req, res) => {
  const { direccion, ciudadId, paisId } = req.body;
  try {
    const nuevaDireccion = await Direccion.create({ direccion, ciudadId, paisId });
    res.status(201).json(nuevaDireccion);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al crear la dirección.' });
  }
};

exports.updateAddress = async (req, res) => {
  const { id } = req.params;
  const { direccion, ciudadId, paisId } = req.body;
  try {
    const direccionActualizada = await Direccion.findByPk(id);
    if (direccionActualizada) {
      await direccionActualizada.update({ direccion, ciudadId, paisId });
      res.json(direccionActualizada);
    } else {
      res.status(404).json({ error: 'Dirección no encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al actualizar la dirección.' });
  }
};

exports.deleteAddress = async (req, res) => {
  const { id } = req.params;
  try {
    const direccion = await Direccion.findByPk(id);
    if (direccion) {
      await direccion.destroy();
      res.json({ message: 'Dirección eliminada correctamente.' });
    } else {
      res.status(404).json({ error: 'Dirección no encontrada.' });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Error al eliminar la dirección.' });
  }
};
