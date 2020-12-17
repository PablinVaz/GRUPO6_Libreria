// LLamamos a una propiedad llamada { Router } del modulo 'express'
const { Router } = require('express')
const router = Router()

//Importamos las funciones creadas en disc.controller.js
const { renderDiscForm, createNewDisc, renderDiscs, renderEditDiscForm, updateDisc, deleteDisc } = require('../controllers/disc.controller');

//Cuando se solicite una ruta le decimos que tienes que ir a buscarla a disc.controller.js

//CREATE disc
router.get('/disc/add', renderDiscForm);
router.post('/disc/add', createNewDisc);

//READ discs
router.get('/disc', renderDiscs);

//UPDATE discs
router.get('/disc/edit/:id', renderEditDiscForm);
router.put('/disc/edit/:id', updateDisc);

//DELETE disc
router.delete('/disc/delete/:id', deleteDisc)

module.exports = router