const fs=require("fs");
const path=require("path");
const pathFile=path.join(__dirname,"../logs/usersLogs.txt");


const logs_middleware=(req,res,next)=>{
    // console.log("pasando por el middleware"
    // );
    fs.appendFileSync(pathFile,"El usuario ingreso a la ruta: "+req.url+"\n");
    next();
}

module.exports=logs_middleware;