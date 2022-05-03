const express = require('express');
const router = express.Router();

const notaController = require('../controllers/notaController');

router.get('/:id_nota/detalle',notaController.getNota);
router.get('/:id_nota/editar', notaController.editarNota);
router.put('/:id_nota/editar', notaController.putNota);
router.delete('/:id_nota/editar', notaController.borrarNota);
router.get('/nueva', notaController.register);
router.post('/nueva', notaController.postNota);




module.exports = router;