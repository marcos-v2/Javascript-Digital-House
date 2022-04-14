const express = require("express");
const router = express.Router();

const profesoresController = require('../controllers/profesoresController');

router.get('/', profesoresController.allTeachers)

router.get('/:id', profesoresController.teachersId)


module.exports = router;