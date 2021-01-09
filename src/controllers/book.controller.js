//Creamos un objeto vacio y lo rellenamos más adelante con 'renderBookFrom', 'createNewBook', 'renderBooks', 'renderEditBookForm', 'updateBook' y 'deleteBook'
const bookCtrl = {};

// Importamos el SCHEMA de models/Book
const Book = require('../models/Book')

//El objeto va a tener varias funciones a las cuales vamos a llamar en book.routes.js
bookCtrl.renderBookForm = (req,res) => {
    res.render('books/new-book')
};
bookCtrl.createNewBook = async (req, res) => {
    const { title, publisher, stock, price } = req.body;
    const newBook = new Book ({title, publisher, stock, price});
    await newBook.save();
    // Mensajes de Libro
    //Le decimos que guarde el mensaje 'Libro agregado correctamente' en 'success_msg'
    req.flash('success_msg', 'Libro agregado correctamente'); 
    res.redirect('/books')
};
bookCtrl.renderBooks = async (req, res) => {
    const books = await Book.find().lean();  //.sort({createdAt:'desc'}) Cambiamos la fomra en la que nos muestra los libros.
    //Le decimos que nos muestre los libros por fecha de creación descendente, los ultimos creamos los primeros en mostrar. 
    res.render('books/all-books',{ books })
};
bookCtrl.renderEditBookForm = async (req, res) => {
    const libro = await Book.findById(req.params.id).lean();
    res.render('books/edit-book', { libro });
};
bookCtrl.updateBook = async (req, res) => {
    const { title, publisher, price ,stock } = req.body;
    await Book.findByIdAndUpdate(req.params.id, { title, publisher, price, stock }),
    // Mensajes de Libro
    //Le decimos que guarde el mensaje 'Libro actualizado correctamente' en 'success_msg'
    req.flash('success_msg', 'Libro actualizado correctamente'); 
    res.redirect('/books')
};
bookCtrl.deleteBook = async (req, res) => {
    await Book.findByIdAndDelete(req.params.id)
    // Mensajes de Libro
    //Le decimos que guarde el mensaje 'Libro eliminado correctamente' en 'success_msg'
    req.flash('success_msg', 'Libro eliminado correctamente'); 
    res.redirect('/books')
};

//EXPORTAMOS
module.exports = bookCtrl;