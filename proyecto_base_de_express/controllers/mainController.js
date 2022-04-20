// Acá nos falta nuestra fuente de datos

// Acá nos falta un objeto literal con las acciones para cada ruta
const dishes=[{name:"Carpaccio fresco",desc:"Entrada Carpaccio de salmón con cítricos U$S 65.50"},
{name:"Risotto de berenjena",desc:"Risotto de berenjena y queso de cabra U$S 47.00"},
{name:"Mousse de arroz",desc:"Mousse de arroz con leche y aroma de azahar U$S 27.50"},
{name:"Espárragos blancos",desc:"Espárragos blancos con vinagreta de verduras y jamón ibérico U$S 37.50"}];
const home = (req,res)=>{
res.render("index",{productos:dishes})};

const mainController = {
    home,
}
// Acá exportamos el resultado
module.exports = mainController;