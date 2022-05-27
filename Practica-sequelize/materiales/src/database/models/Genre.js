const { DataTypes } = require("sequelize");
module.exports=(sequelize,Datatypes)=>{
    let alias= "Genres";
    let cols= {
        id:{
            type: DataTypes.INTEGER,primaryKey:true,autoIncrement:true}
            ,
        name:{
            type:DataTypes.STRING},
        ranking:{
            type:DataTypes.INTEGER},
        active:{type:DataTypes.BOOLEAN}    
};
    let config={
        // tableName: "movies",    
        timestamps:false}
    const Genre= sequelize.define(alias,cols,config);
    return Genre;
}