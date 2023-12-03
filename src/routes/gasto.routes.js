const express = require('express')
const router = express.Router()
const gastoController = require('../controllers/gasto.controller');

// Todos los gastos
router.get('/', gastoController.findAll);

// Crear un nuevo gasto
router.post('/', gastoController.create);

// Devuelve un único gasto por su id
router.get('/:id', gastoController.findById);

// Actualizar un gasto por su id
router.put('/:id', gastoController.update);

// Borrar un gasto por su id
router.delete('/:id', gastoController.delete);

// Todos los gastos por usuario_id y null
router.post('/find', gastoController.findByUsuarioId);

module.exports = router