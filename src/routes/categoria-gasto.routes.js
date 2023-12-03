const express = require('express')
const router = express.Router()
const categoriaGastoController = require('../controllers/categoria-gasto.controller');

// Todas las categoriaGastos
router.get('/', categoriaGastoController.findAll);

// Crear una nueva categoriaGasto
router.post('/', categoriaGastoController.create);

// Devuelve una única categoriaGasto por su id
router.get('/:id', categoriaGastoController.findById);

// Actualizar una categoriaGasto por su id
router.put('/:id', categoriaGastoController.update);

// Borrar una categoriaGasto por su id
router.delete('/:id', categoriaGastoController.delete);

// Todos los gastos por usuario_id y null
router.post('/find', categoriaGastoController.findByUsuarioId);

module.exports = router