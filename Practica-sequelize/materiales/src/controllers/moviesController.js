let db = require("../database/models");
module.exports={
    list:(req,res)=>{db.Movies.findAll()
    .then ((movies)=>{res.render("moviesList",{movies:movies})})},
    detail:(req,res)=>{db.Movies.findByPk(req.params.id)
    .then ((movie)=>{res.render("moviesDetail",{movie:movie})})},
    new:(req,res)=>{
        db.Movies.findAll({order:[["release_date","DESC"]]})
        .then((newest) =>{res.render("newestMovies",{movies:newest})})}
        ,    recommended:(req,res)=>{
        db.Movies.findAll({order:[["rating","DESC"]],limit:5})
        .then((recommendations) =>{res.render("recommendedMovies",{movies:recommendations})})}
}
