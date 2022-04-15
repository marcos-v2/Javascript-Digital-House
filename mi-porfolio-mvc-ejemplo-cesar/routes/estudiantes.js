
const express = require("express");
const router = express.Router();

const estudiantesController = require('../controllers/estudiantesController')


router.get('/',estudiantesController.allStudents );

router.get('/:id', estudiantesController.studentsId);



module.exports = router;




