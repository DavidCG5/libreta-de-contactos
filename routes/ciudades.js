// backend/routes/ciudades.js
const express = require('express');
const router = express.Router();
const ciudadController = require('../controllers/ciudadController');

router.get('/ciudades', ciudadController.getAllCities);
router.get('/ciudades/:id', ciudadController.getCityById);
router.post('/ciudades', ciudadController.createCity);
router.put('/ciudades/:id', ciudadController.updateCity);
router.delete('/ciudades/:id', ciudadController.deleteCity);

module.exports = router;
