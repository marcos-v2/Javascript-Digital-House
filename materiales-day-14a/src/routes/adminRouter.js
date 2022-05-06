const express = require("express");
// const { body } = require("express-validator");
const router = express.Router();
const mainController = require("../controllers/adminControllers");
router.get("/", mainController.home);
// router.post("/", mainController.home);

module.exports = router;
