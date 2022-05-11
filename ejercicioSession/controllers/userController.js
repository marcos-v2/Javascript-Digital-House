const { validationResult } = require('express-validator');

const userSignUp = (req,res) => {
    const { user } = req.session;
    
    if(user === undefined){
        return res.render('formularioRegistro')
    }

    res.render('formularioRegistro',{sesion:user})
}

const register = (req,res) => {

    // const errores = validationResult(req);
    const { errors } = validationResult(req);
    
    // if(errores.errors.length > 0){
    if(errors.length > 0){
        // return res.render('formularioRegistro',{errors:errores.errors})
        return res.render('formularioRegistro',{errors,old:req.body})
    }

    req.session.user = {
        name: req.body.name,
        color: req.body.color,
        email: req.body.email,
        edad: req.body.edad,
    }

    return res.redirect('/user/signup')
}



module.exports = {
    userSignUp,
    register
}