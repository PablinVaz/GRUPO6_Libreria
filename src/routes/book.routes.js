// LLamamos a una propiedad llamada { Router } del modulo 'express'
const { Router } = require ('express')
const router = Router()

//Importamos las funciones creadas en book.controller.js
const { renderBookForm, createNewBook, renderBooks, renderEditBookForm, updateBook, deleteBook } = require ('../controllers/book.controller');

//Cuando se solicite una ruta le decimos que tienes que ir a buscarla a book.controller.js

//CREATE Book
router.get('/books/add', renderBookForm);
router.post('/books/new-book', createNewBook);

//READ Books
router.get('/books', renderBooks);

//UPDATE books
router.get('/books/edit/:id', renderEditBookForm);
router.put('/books/edit/:id', updateBook);

//DELETE Book
router.delete('/books/delete/:id', deleteBook)


module.exports = router