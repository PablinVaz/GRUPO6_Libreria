// LLamamos a una propiedad llamada { Router } del modulo 'express'
const { Router } = require ('express')
const router = Router()

//Importamos las funciones creadas en book.controller.js
const { renderBookForm, createNewBook, renderBooks, renderEditBookForm, updateBook, deleteBook, findByName} = require ('../controllers/book.controller');

const { isValidate } = require('../helpers/validate')

//Cuando se solicite una ruta le decimos que tienes que ir a buscarla a book.controller.js

//CREATE Book
router.get('/books/add', isValidate, renderBookForm);
router.post('/books/new-book', isValidate, createNewBook);

//READ Books
router.get('/books', isValidate, renderBooks);

//UPDATE books
router.get('/books/edit/:id', isValidate, renderEditBookForm);
router.put('/books/edit/:id', isValidate, updateBook);

//DELETE Book
router.delete('/books/delete/:id', isValidate, deleteBook);

//Search Book
router.post('/search', isValidate, findByName)


module.exports = router;