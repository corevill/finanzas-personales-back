'user strict';
var dbConn = require('../../config/db.config');

var Ingreso = function(ingreso){

    this.id            = ingreso.id;
    this.created_at = new Date();
    this.updated_at = new Date();

    this.descripcion   = ingreso.descripcion;
    this.fecha_ingreso = ingreso.fecha_ingreso;
    this.cantidad      = ingreso.cantidad;
    this.usuario_id    = ingreso.usuario_id;
    
};

Ingreso.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO ingresos set ?", newEmp, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });           
};
Ingreso.findById = function (id, result) {
    dbConn.query("Select * from ingresos where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Ingreso.findAll = function (result) {
    dbConn.query("Select * from ingresos", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('ingresos : ', res);  
            result(null, res);
        }
    });   
};
Ingreso.update = function(id, ingreso, result){
  dbConn.query("UPDATE ingresos SET descripcion=?,fecha_ingreso=?,cantidad=?,usuario_id=? WHERE id = ?", [ingreso.descripcion,ingreso.fecha_ingreso,ingreso.cantidad,ingreso.usuario_id, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Ingreso.delete = function(id, result){
     dbConn.query("DELETE FROM ingresos WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

Ingreso.findByUsuarioId = function (req, result) {    
    dbConn.query("Select * from ingresos where usuario_id = ? ", req.usuario_id, function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('ingresos : ', res);  
            result(null, res);
        }
    });           
};

module.exports= Ingreso;