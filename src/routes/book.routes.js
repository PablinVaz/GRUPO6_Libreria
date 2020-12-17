// LLamamos a una propiedad llamada { Router } del modulo 'express'
const { Router } = require('express')
const router = Router()

//Importamos las funciones creadas en book.controller.js
const { renderBookForm, createNewBook, renderBooks, renderEditBookForm, updateBook, deleteBook } = require('../controllers/book.controller');

//Cuando se solicite una ruta le decimos que tienes que ir a buscarla a book.controller.js

//CREATE Book
router.get('/book/add', renderBookForm);
router.post('/book/add', createNewBook);

//READ Books
router.get('/book', renderBooks);

//UPDATE books
router.get('/book/edit/:id', renderEditBookForm);
router.put('/book/edit/:id', updateBook);

//DELETE Book
router.delete('/book/delete/:id', deleteBook)


module.exports = router