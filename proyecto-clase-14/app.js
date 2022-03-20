const express = require('express');
const { homedir } = require('os');
const path= require("path");
const app = express();
const publicPath=path.resolve(__dirname,"./public")
app.use(express.static(publicPath));
app.listen(3000,()=>console.log("Levantando un servidor con Express"));
app.get ("/",(req,res)=>{res.sendFile(path.resolve(__dirname,"./views/home.html"))});
