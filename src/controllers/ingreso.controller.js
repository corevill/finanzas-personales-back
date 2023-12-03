'use strict';

const Ingreso = require('../models/ingreso.model');

exports.findAll = function(req, res) {
  Ingreso.findAll(function(err, ingreso) {
    console.log('controller')
    if (err)
    res.send(err);
    console.log('res', ingreso);
    res.send(ingreso);
  });
};


exports.create = function(req, res) {
    const new_ingreso = new Ingreso(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor añada todos los campos requeridos' });
    }else{
        Ingreso.create(new_ingreso, function(err, ingreso) {
            if (err)
            res.send(err);
            res.json({error:false,message:"Ingreso añadido correctamente!",data:ingreso});
        });
    }
};


exports.findById = function(req, res) {
    Ingreso.findById(req.params.id, function(err, ingreso) {
        if (err)
        res.send(err);
        res.json(ingreso);
    });
};


exports.update = function(req, res) {
    if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor añada todos los campos requeridos' });
    }else{
        Ingreso.update(req.params.id, new Ingreso(req.body), function(err, ingreso) {
            if (err)
            res.send(err);
            res.json({ error:false, message: 'Ingreso actualizado correctamente' });
        });
    }
  
};


exports.delete = function(req, res) {
  Ingreso.delete( req.params.id, function(err, ingreso) {
    if (err)
    res.send(err);
    res.json({ error:false, message: 'Ingreso successfully deleted' });
  });
};

exports.findByUsuarioId = function(req, res) {
    const criteriosBusqueda = new Ingreso(req.body);

    //handles null error 
   if(req.body.constructor === Object && Object.keys(req.body).length === 0){
        res.status(400).send({ error:true, message: 'Por favor añada todos los campos requeridos' });
    }else{
        Ingreso.findByUsuarioId(criteriosBusqueda, function(err, ingresos) {
            if (err)
            res.send(err);
            res.json(ingresos);
        });
    }
};
