// Acá nos falta express y el router
const express=require("express");
// Aća nos falta traer el controller
const router =express.Router();
// Acá definimos las rutas
const mainController=require("../controllers/mainController");
router.get("/",mainController.home);
// Acá exportamos el resultado
module.exports= router;