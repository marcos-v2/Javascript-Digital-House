const express = require("express");
const router = express.Router();
const mainControllers=require("../controllers/mainControllers");
router.get('/',mainControllers.home );
router.get('/about', mainControllers.about);
module.exports = router;