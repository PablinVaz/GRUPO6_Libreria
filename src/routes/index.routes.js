// LLamamos a una propiedad llamada { Router } del modulo 'express'
const { Router } = require ('express');
// Guardamos en una constante los objetos que nos devuelve la funcion Router()
const router = Router();
//Importamos las funciones creadas en index.controller.js
const {renderIndex, renderAbout } = require('../controllers/index.controller')
//Cuando se solicite una ruta le decimos que tienes que ir a buscarla a index.controller.js
router.get('/', renderIndex);
router.get('/about', renderAbout);


//Lo exportamos porque lo vamos a usar en server.js en la seccion de RUTAS
module.exports = router;