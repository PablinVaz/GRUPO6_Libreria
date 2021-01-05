//Creamos un objeto vacio y lo rellenamos más adelante con 'renderIndex' y con 'renderReg'
const indexCtrl = {};

//El objeto va a tener varias funciones a las cuales vamos a llamar en index.routes.js 
indexCtrl.renderIndex = (req, res) =>{
    res.render('index')
};
indexCtrl.renderReg = (req, res) =>{
    res.render('register')
};

//Exportamos
module.exports = indexCtrl;