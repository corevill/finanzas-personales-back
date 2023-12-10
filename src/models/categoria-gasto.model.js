'user strict';
const getConnection = require('./../../config/db.config');

var CategoriaGasto = function(categoriaGasto){

    this.id         = categoriaGasto.id;
    this.created_at = new Date();
    this.updated_at = new Date();

    this.nombre     = categoriaGasto.nombre;
    this.usuario_id = categoriaGasto.usuario_id;
};

CategoriaGasto.create = function (newEmp, result) {    
     var dbConn = getConnection();
    dbConn.query("INSERT INTO gasto_categorias set ?", newEmp, function (err, res) {
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
CategoriaGasto.findById = function (id, result) {
     var dbConn = getConnection();
    dbConn.query("Select * from gasto_categorias where id = ? ", id, function (err, res) {             
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
CategoriaGasto.findAll = function (result) {
     var dbConn = getConnection();
    dbConn.query("Select * from gasto_categorias", function (err, res) {
    dbConn.end();
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('gasto_categorias : ', res);  
            result(null, res);
        }
    });   
};
CategoriaGasto.update = function(id, categoriaGasto, result){
   var dbConn = getConnection();
    dbConn.query("UPDATE gasto_categorias SET nombre=?,usuario_id=? WHERE id = ?", [categoriaGasto.nombre,categoriaGasto.usuario_id, id], function (err, res) {
    dbConn.end();
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
CategoriaGasto.delete = function(id, result){
     var dbConn = getConnection(); 
    dbConn.query("DELETE FROM gasto_categorias WHERE id = ?", [id], function (err, res) {
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

CategoriaGasto.findByUsuarioId = function (req, result) {
     var dbConn = getConnection();
    dbConn.query("Select * from gasto_categorias where usuario_id = ? or usuario_id is null", req.usuario_id, function (err, res) {
    dbConn.end();
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('gasto_categorias : ', res);
            result(null, res);
        }
    });
};

module.exports= CategoriaGasto;