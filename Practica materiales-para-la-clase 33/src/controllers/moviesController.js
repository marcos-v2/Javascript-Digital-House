const path = require('path');
const db = require('../database/models');
const sequelize = db.sequelize;
const { Op } = require("sequelize");


//Aqui tienen una forma de llamar a cada uno de los modelos
// const {Movies,Genres,Actor} = require('../database/models');

//Aquí tienen otra forma de llamar a los modelos creados
const Movies = db.Movie;
const Genres = db.Genre;
const Actors = db.Actor;


const moviesController = {
    'list': (req, res) => {
        db.Movie.findAll()
            .then(movies => {
                res.render('moviesList.ejs', {movies})
            })
    },
    'detail': (req, res) => {
        db.Movie.findByPk(req.params.id)
            .then(movie => {
                res.render('moviesDetail.ejs', {movie});
            });
    },
    'new': (req, res) => {
        db.Movie.findAll({
            order : [
                ['release_date', 'DESC']
            ],
            limit: 5
        })
            .then(movies => {
                res.render('newestMovies', {movies});
            });
    },
    'recomended': (req, res) => {
        db.Movie.findAll({
            where: {
                rating: {[db.Sequelize.Op.gte] : 8}
            },
            order: [
                ['rating', 'DESC']
            ]
        })
            .then(movies => {
                res.render('recommendedMovies.ejs', {movies});
            });
    },
    //Aqui dispongo las rutas para trabajar con el CRUD
    add: function (req, res) {


        res.render("moviesAdd")
        
    },
    create: function (req,res) {

    },
    edit: function(req,res) {

        const {id} = req.params;

        const peliculasPromesa = Movies.findByPk(id,{
            include:['genre'],
            raw:true,
            nest: true
        })
        
        // la propiedad raw sirve para ordenar la respuesta de la base de datos
        const generosPromesa = Genres.findAll({raw:true})

        Promise.all([peliculasPromesa,generosPromesa])
            .then(resultado => {
                
                // Destructuring de arrays
                const [pelicula, generos] = resultado;
                res.render("moviesEdit",{Movie:pelicula, allGenres:generos});

                // otra solucion
                // res.render("moviesEdit",{Movie:resultado[0], allGenres:resultado[1]});

                // otra otra solucion
                // const pelicula = resultado[0];
                // const generos = resultado[1];
                // res.render("moviesEdit",{Movie:pelicula, allGenres:generos});
            })

    },
    update: function (req,res) {

    },
    delete: function (req,res) {

    },
    destroy: function (req,res) {

    }
}

module.exports = moviesController;