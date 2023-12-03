'user strict';

const mysql = require('mysql2');

//local mysql db connection
const dbConn = mysql.createConnection({
  host     : 'viaduct.proxy.rlwy.net',
  user     : 'root',
  password : 'BE-Agd5Ch6e2cCF1aCbGdd3e-52d-D5B',
  database : 'railway',
  port: 23943,
  multipleStatements: true
});
dbConn.connect(function(err) {
  if (err) throw err;
  console.log("Database Connected!");
});
module.exports = dbConn;