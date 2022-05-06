const express = require('express');

const router = express.Router();
const mainController=require("../controllers/servicesControllers");
router.get("/",mainController.home)

module.exports = router;