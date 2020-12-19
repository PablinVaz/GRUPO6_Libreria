const {Schema, model} = require('mongoose');

const DiscSchema = new Schema ({
    title: {
        type: String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    price:{
        type: String,
        default: 0,
        required: true,
    },
    stock:{
        type: String,
        default: 0,
        required: true,
    }
}, {
    timestamps:true   //añade fecha de creación y de actualización
})

module.exports = model('Disc', DiscSchema);