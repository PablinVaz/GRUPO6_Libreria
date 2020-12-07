//Creamos un objeto
const indexCtrl = {};

//El objeto va a tener varias funciones a las cuales vamos a llamar en index.routes.js 
indexCtrl.renderIndex = (req, res) =>{
    res.render('index')
};

indexCtrl.renderAbout = (req, res) =>{
    res.render('about')
};

//Exportamos
module.exports = indexCtrl;