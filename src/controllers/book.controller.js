//Creamos un objeto
const bookCtrl = {};
// Importamos el SCHEMA de models/Book
const Book = require('../models/Book')

//El objeto va a tener varias funciones a las cuales vamos a llamar en book.routes.js 
bookCtrl.renderBookForm = (req, res) => {
    res.render('book/new-book')
};
bookCtrl.createNewBook = async (req, res) => {
    const {title, publisher, price} = req.body;
    const newBook = new Book ({title, publisher, price})
    await newBook.save();
    res.send('new book')
};
bookCtrl.renderBooks = async (req, res) => {
    const books = await Book.find().lean();
    res.render('book/all-books',{ books })
};
bookCtrl.renderEditBookForm = (req, res) => {
    res.send('render edit form')
};
bookCtrl.updateBook = (req, res) => {
    res.send('update book')
};
bookCtrl.deleteBook = (req, res) => {
    res.send('book deleted')
}

//EXPORTAMOS
module.exports = bookCtrl;