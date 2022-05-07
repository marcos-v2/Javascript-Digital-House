const express = require("express");
const adminValidMiddleware=require("../middlewares/adminValid");
// const { body } = require("express-validator");
const router = express.Router();
const mainController = require("../controllers/adminControllers");
router.get("/",adminValidMiddleware,mainController.home);
// router.post("/", mainController.home);

module.exports = router;
