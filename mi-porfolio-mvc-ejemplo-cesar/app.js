const express = require('express');
const app = express();

const estudiantes = require('./routes/estudiantes');
const profesores = require('./routes/profesores');


app.use('/estudiantes',estudiantes);

app.use('/profesores',profesores);


app.listen(3000,() => {
    console.log('conectado!')
});


