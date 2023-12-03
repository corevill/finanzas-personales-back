const express = require('express')
const router = express.Router()
const ingresoController = require('../controllers/ingreso.controller');

// Todos los ingresos
router.get('/', ingresoController.findAll);

// Crear un nuevo ingreso
router.post('/', ingresoController.create);

// Devuelve un único ingreso por su id
router.get('/:id', ingresoController.findById);

// Actualizar un ingreso por su id
router.put('/:id', ingresoController.update);

// Borrar un ingreso por su id
router.delete('/:id', ingresoController.delete);

// Todos los ingresos por usuario_id y null
router.post('/find', ingresoController.findByUsuarioId);

module.exports = router