const { DataTypes } = require("sequelize");
module.exports=(sequelize,Datatypes)=>{
    let alias= "Movies";
    let cols= {id:
        { type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncremet:true},
    title:{type:DataTypes.STRING},
    rating:{type:DataTypes.FLOAT},
    awards:{type:DataTypes.INTEGER},
    release_date:{type:DataTypes.DATE},
    length:{type:DataTypes.INTEGER},
    genre_id:{type:DataTypes.INTEGER}
};
    let config={
        // tableName: "movies",    
        timestamps:false

    }
    const Movie= sequelize.define(alias,cols,config);
    return Movie;
}