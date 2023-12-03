const express = require('express');
const bodyParser = require('body-parser');

// Configuración de ExpressJS y servidor
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send("¡Bienvenido a la API de Finanzas Personales!");
});

/**
 * ENRUTAMIENTOS A LAS ENTIDADES DE LA APLICACIÓN
 */

const usuarioRoutes = require('./src/routes/usuario.routes')
app.use('/api/v1/usuarios', usuarioRoutes)

const gastoRoutes = require('./src/routes/gasto.routes')
app.use('/api/v1/gastos', gastoRoutes)

const ingresoRoutes = require('./src/routes/ingreso.routes')
app.use('/api/v1/ingresos', ingresoRoutes)

const categoriaGastoRoutes = require('./src/routes/categoria-gasto.routes')
app.use('/api/v1/categoria-gastos', categoriaGastoRoutes)

/**
 * FIN ENRUTAMIENTOS
 */

// Comenzamos a escuchar el puerto definido arriba
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});