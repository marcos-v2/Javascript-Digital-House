const adminValid = (req, res, next) => {
  switch (req.query.user){
        case "Ada" :return next();
        case "Tim" :return next();
        case "Vim" :return next();
        case "Greta": return next();
    default:{res.send("No tienes privilegios para ingresar");
    console.log("Validación completada")};
  }
  
 

};

module.exports = adminValid;
