'use strict';

const CategoriaGasto = require('../models/categoria-gasto.model');

exports.findAll = function(req, res) {
  CategoriaGasto.findAll(function(err, categoriaGasto) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', categoriaGasto);
    res.send(categoriaGasto);
  });
};


exports.create = function(req, res) {
    const new_categoriaGasto = new CategoriaGasto(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor añada todos los campos requeridos' });
    }else{
        CategoriaGasto.create(new_categoriaGasto, function(err, categoriaGasto) {
            if (err)
            res.send(err);
            res.json({error:false,message:"CategoriaGasto añadido correctamente!",data:categoriaGasto});
        });
    }
};


exports.findById = function(req, res) {
    CategoriaGasto.findById(req.params.id, function(err, categoriaGasto) {
        if (err)
        res.send(err);
        res.json(categoriaGasto);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor añada todos los campos requeridos' });
    }else{
        CategoriaGasto.update(req.params.id, new CategoriaGasto(req.body), function(err, categoriaGasto) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'CategoriaGasto actualizado correctamente' });
        });
    }
  
};


exports.delete = function(req, res) {
  CategoriaGasto.delete( req.params.id, function(err, categoriaGasto) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'CategoriaGasto successfully deleted' });
  });
};

exports.findByUsuarioId = function(req, res) {
    const criteriosBusqueda = new CategoriaGasto(req.body);
    //handles null error
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor añada todos los campos requeridos' });
    }else{
        CategoriaGasto.findByUsuarioId(criteriosBusqueda, function(err, gastoCategorias) {
            if (err)
            res.send(err);
            res.json(gastoCategorias);
        });
    }
};