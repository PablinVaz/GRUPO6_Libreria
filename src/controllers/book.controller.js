//Creamos un objeto
const bookCtrl = {};

//El objeto va a tener varias funciones a las cuales vamos a llamar en book.routes.js 
bookCtrl.renderBookForm = (req, res) => {
    res.send('book add')
};
bookCtrl.createNewBook = (req, res) => {
    res.send('new book')
};
bookCtrl.renderBooks = (req, res) => {
    res.send('render books')
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