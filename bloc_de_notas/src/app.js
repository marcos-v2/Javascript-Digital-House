const express = require('express');
const app = express();
const path = require('path');
const methodOverride = require('method-override');

const mainRoute = require('./routes/mainRoute');
const notasRoutes = require('./routes/notasRoutes');


// Habilitar las peticiones http put y delete
app.use(methodOverride('_method'));

// Habilitar recepcion de informacion
app.use(express.urlencoded({extended:false}));
app.use(express.json());

// Configuracion de EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'./views'));


// Rutas
app.use('/',mainRoute);
app.use('/nota',notasRoutes);



app.listen( 3000 , () => {
    console.log('Escuchando en el puerto 3000')
})