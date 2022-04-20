// Acá nos falta nuestra fuente de datos

// Acá nos falta un objeto literal con las acciones para cada ruta
const home = (req,res)=>{
res.render("index");
}
const mainController = {
    home,
}
// Acá exportamos el resultado
module.exports= mainController