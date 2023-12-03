'use strict';

const Gasto = require('../models/gasto.model');

exports.findAll = function(req, res) {
  Gasto.findAll(function(err, gasto) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', gasto);
    res.send(gasto);
  });
};


exports.create = function(req, res) {
    const new_gasto = new Gasto(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor añada todos los campos requeridos' });
    }else{
        Gasto.create(new_gasto, function(err, gasto) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Gasto añadido correctamente!",data:gasto});
        });
    }
};


exports.findById = function(req, res) {
    Gasto.findById(req.params.id, function(err, gasto) {
        if (err)
        res.send(err);
        res.json(gasto);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor añada todos los campos requeridos' });
    }else{
        Gasto.update(req.params.id, new Gasto(req.body), function(err, gasto) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Gasto actualizado correctamente' });
        });
    }
  
};


exports.delete = function(req, res) {
  Gasto.delete( req.params.id, function(err, gasto) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Gasto successfully deleted' });
  });
};

exports.findByUsuarioId = function(req, res) {
    const criteriosBusqueda = new Gasto(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor añada todos los campos requeridos' });
    }else{
        Gasto.findByUsuarioId(criteriosBusqueda, function(err, gastos) {
            if (err)
            res.send(err);
            res.json(gastos);
        });
    }
};
