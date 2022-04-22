// Módulos
const express = require('express');
const app = express();
// Acá falta uno... 😇
const mainRouter = require('./routes/mainRouter');

// Configuración
app.use(express.static('public'));
// Acá falta el template engine
app.set('view engine', 'ejs');

// Rutas
// Acá falta el archivo de rutas y después las vistas de EJS
app.use('/', mainRouter);


app.listen(3000, () => { console.log('Servidor arriba en el puerto 3000 🤓👌');})