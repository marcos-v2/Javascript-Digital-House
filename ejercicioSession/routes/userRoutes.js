const express = require('express');
const router = express.Router();
const { body } = require('express-validator'); 

const userController = require('../controllers/userController');


const validate = [
    body('name').notEmpty().withMessage('El nombre es requerido'),
    body('color').notEmpty().withMessage('Selecciona un color!!'),
    body('email').notEmpty().withMessage('El correo es requerido').bail()
        .isEmail().withMessage('Digita un correo valido'),
        // TODO: Como podrian validar esta parte de la edad segun requerimientos
    body('edad').notEmpty().withMessage('Digita una edad!').bail()
    .isNumeric().withMessage('Edad invalida')
]

router.get('/signup', userController.userSignUp)
router.post('/signup', validate, userController.register)



module.exports = router;