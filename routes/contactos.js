// backend/routes/contactos.js
const express = require('express');
const router = express.Router();
const contactoController = require('../controllers/contactoController');

router.get('/contactos', contactoController.getAllContacts);
router.get('/contactos/:id', contactoController.getContactById);
router.post('/contactos', contactoController.createContact);
router.put('/contactos/:id', contactoController.updateContact);
router.delete('/contactos/:id', contactoController.deleteContact);

module.exports = router;
