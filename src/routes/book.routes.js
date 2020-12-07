const { Router } = require('express')
const router = Router()

const { renderBookForm, createNewBook, renderBooks, renderEditBookForm, updateBook, deleteBook } = require('../controllers/book.controller');

//Nuevo Book
router.get('/book/add', renderBookForm);
router.post('/book/add', createNewBook);

//Obtener Books
router.get('/book', renderBooks);

//Editar books
router.get('/book/edit/:id', renderEditBookForm);
router.put('/book/edit/:id', updateBook);

//Eliminar Book
router.delete('/book/delete/:id', deleteBook)

module.exports = router