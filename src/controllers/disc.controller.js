//Creamos un objeto
const discCtrl = {};

//El objeto va a tener varias funciones a las cuales vamos a llamar en disc.routes.js 
discCtrl.renderDiscForm = (req, res) => {
res.send('disc add')
};
discCtrl.createNewDisc = (req, res) => {
    res.send('new disc')
};
discCtrl.renderDiscs = (req, res) => {
    res.send('render discs')
};
discCtrl.renderEditDiscForm = (req, res) => {
    res.send('render edit form')
};
discCtrl.updateDisc = (req, res) => {
    res.send('update disc')
};
discCtrl.deleteDisc = (req, res) => {
    res.send('disc deleted')
}

//EXPORTAMOS
module.exports = discCtrl;