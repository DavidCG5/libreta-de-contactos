// backend/routes/paises.js
const express = require('express');
const router = express.Router();
const paisController = require('../controllers/paisController');

router.get('/paises', paisController.getAllCountries);
router.get('/paises/:id', paisController.getCountryById);
router.post('/paises', paisController.createCountry);
router.put('/paises/:id', paisController.updateCountry);
router.delete('/paises/:id', paisController.deleteCountry);

module.exports = router;