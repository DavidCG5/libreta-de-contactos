// backend/routes/direccionRoutes.js
const express = require('express');
const router = express.Router();
const direccionController = require('../controllers/direccionController');

router.get('/', direccionController.getAllAddresses);
router.get('/:id', direccionController.getAddressById);
router.post('/', direccionController.createAddress);
router.put('/:id', direccionController.updateAddress);
router.delete('/:id', direccionController.deleteAddress);

module.exports = router;
