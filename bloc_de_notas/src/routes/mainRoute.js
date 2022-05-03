
const express = require('express');

const router = express.Router();

const homecontroller = require('../controllers/homeController');

router.get('/', homecontroller.gethome);


module.exports = router;