const db = require('../database/models');
const sequelize = db.sequelize;

//Otra forma de llamar a los modelos
const Movies = db.Movie;

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
    }, //Aqui debemos modificar y completar lo necesario para trabajar con el CRUD
    add: function (req, res) {
        res.render("moviesAdd")   
    },
    create: function (req, res) {
        Movies.create(
            {title:req.body.title,
                rating: req.body.rating,
                length:req.body.length,
                awards:req.body.awards,
                release_date:req.body.release_date
            })
            .then (()=>res.render("moviesAdd"))
            .catch ((errors)=>{res.send(errors)})
        },
        
        // TODO
    
    edit: function(req, res) {
        Movies.findByPk(req.params.id).then((Movie)=>
       {res.render("moviesEdit",{Movie:Movie})} )
        // TODO
    },
    update: function (req,res) {Movies.update(
       {  title:req.body.title,
            rating: req.body.rating,
            length:req.body.length,
            awards:req.body.awards,
            release_date:req.body.release_date
        },
        {where:{id:req.params.id}
        })
        .then (()=>res.redirect("/movies"))
        .catch ((errors)=>{res.send(errors)})}
    ,
        // TODO

    delete: function (req, res) {
        // TODO
    },
    destroy: function (req, res) {
        // TODO
    }

}

module.exports = moviesController;