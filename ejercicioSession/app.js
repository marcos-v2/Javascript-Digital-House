const express = require('express');
const session = require('express-session');
const app = express();
app.set('view engine', 'ejs');
// Habilitar recepcion de informacion
app.use(express.urlencoded({extended:false}));
app.use(express.json());
app.use(session({
    secret:'Palabra secreta!!',
    resave: false,
	saveUninitialized: false,
}))

const userInfo = require('./middlewares/userInfo');
const signup = require('./routes/userRoutes');

app.use(userInfo)

app.use('/user',signup);


app.listen(3000, () => {
    console.log('Escuchando en el puerto 3000...')
})