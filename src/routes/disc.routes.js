const { Router } = require('express')
const router = Router()

const { renderDiscForm, createNewDisc, renderDiscs, renderEditDiscForm, updateDisc, deleteDisc } = require('../controllers/disc.controller');

//Nuevo disc
router.get('/disc/add', renderDiscForm);
router.post('/disc/add', createNewDisc);

//Obtener discs
router.get('/disc', renderDiscs);

//Editar discs
router.get('/disc/edit/:id', renderEditDiscForm);
router.put('/disc/edit/:id', updateDisc);

//Eliminar disc
router.delete('/disc/delete/:id', deleteDisc)

module.exports = router