const discCtrl = {};

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

module.exports = discCtrl;