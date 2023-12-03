'user strict';
var dbConn = require('./../../config/db.config');

var Usuario = function(usuario){

    this.id         = usuario.id;
    this.created_at = new Date();
    this.updated_at = new Date();

    this.nombre     = usuario.nombre;
    this.apellido   = usuario.apellido;
    this.email      = usuario.email;
    this.saldo      = usuario.saldo;
    this.password   = usuario.password;
};

Usuario.existeUsuario  = function(email, result){
    dbConn.query("SELECT * FROM usuarios WHERE email = ?", email, function (err, res){
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else {
            result(null, res);
        }
    });
};

Usuario.create = function (newEmp, result) {    
    dbConn.query("INSERT INTO usuarios set ?", newEmp, function (err, res) {
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
Usuario.findById = function (id, result) {
    dbConn.query("Select * from usuarios where id = ? ", id, function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};
Usuario.findAll = function (result) {
    dbConn.query("Select * from usuarios", function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            console.log('usuarios : ', res);  
            result(null, res);
        }
    });   
};
Usuario.update = function(id, usuario, result){
  dbConn.query("UPDATE usuarios SET nombre=?,apellido=?,email=?,saldo=?,password=? WHERE id = ?", [usuario.nombre,usuario.apellido,usuario.email,usuario.saldo,usuario.password, id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }else{   
            result(null, res);
        }
    }); 
};
Usuario.delete = function(id, result){
     dbConn.query("DELETE FROM usuarios WHERE id = ?", [id], function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(null, err);
        }
        else{
            result(null, res);
        }
    }); 
};

Usuario.login = function (user, result) {
    dbConn.query("Select * from usuarios where email = ? and password = ?", [user.email, user.password], function (err, res) {             
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });   
};

module.exports= Usuario;