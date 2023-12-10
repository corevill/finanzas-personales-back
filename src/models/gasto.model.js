'user strict';
const getConnection = require('./../../config/db.config');

var Gasto = function(gasto){

    this.id            = gasto.id;
    this.created_at = new Date();
    this.updated_at = new Date();
    
    this.descripcion   = gasto.descripcion;
    this.cantidad      = gasto.cantidad;
    this.fecha_gasto = gasto.fecha_gasto;
    this.categoria_id    = gasto.categoria_id;
    this.tipo_gasto    = gasto.tipo_gasto;
    this.usuario_id    = gasto.usuario_id;
};

Gasto.create = function (newEmp, result) {    
     var dbConn = getConnection();
    dbConn.query("INSERT INTO gastos set ?", newEmp, function (err, res) {
        dbConn.end();
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
Gasto.findById = function (id, result) {
     var dbConn = getConnection();
    dbConn.query("Select * from gastos where id = ? ", id, function (err, res) {             
        dbConn.end();
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Gasto.findAll = function (result) {
     var dbConn = getConnection();
    dbConn.query("Select * from gastos", function (err, res) {
    dbConn.end();
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('gastos : ', res);  
            result(null, res);
        }
    });   
};
Gasto.update = function(id, gasto, result){
   var dbConn = getConnection();
    dbConn.query(
        "UPDATE gastos SET descripcion=?,cantidad=?,fecha_gasto=?,categoria_id=?,tipo_gasto=?,usuario_id=? WHERE id = ?", 
        [gasto.descripcion,gasto.cantidad,gasto.fecha_gasto,gasto.categoria_id,gasto.tipo_gasto,gasto.usuario_id, id], 
    function (err, res) {
        dbConn.end();
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Gasto.delete = function(id, result){
     var dbConn = getConnection(); 
    dbConn.query("DELETE FROM gastos WHERE id = ?", [id], function (err, res) {
    dbConn.end();
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

Gasto.findByUsuarioId = function (req, result) {    
     var dbConn = getConnection();
    dbConn.query("Select * from gastos where usuario_id = ? ", req.usuario_id, function (err, res) {
    dbConn.end();
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('gastos : ', res);  
            result(null, res);
        }
    });           
};


module.exports= Gasto;