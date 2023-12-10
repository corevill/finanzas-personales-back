'user strict';

const mysql = require('mysql2');

// Función para crear una nueva conexión
function createNewConnection() {

  //local mysql db connection
  const connection = mysql.createConnection({
    host     : 'viaduct.proxy.rlwy.net',
    user     : 'root',
    password : 'BE-Agd5Ch6e2cCF1aCbGdd3e-52d-D5B',
    database : 'railway',
    port: 23943,
    multipleStatements: true
  });
  return connection;
}
// Función para obtener una conexión
function getConnection() {
    const connection = createNewConnection();
    return connection;
}
// Exportar la función getConnection
module.exports = getConnection;