// const path=require("path");
// const { homedir } = require("os");
const mainControllers={
    home:(req,res) =>{res.sendFile( './views/home.html',{ root: '.' })},
    about:(req,res)=>{res.sendFile('./views/about.html',{root:'.'})}
}

module.exports=mainControllers;
