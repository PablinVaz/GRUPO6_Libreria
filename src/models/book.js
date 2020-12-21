const {Schema, model} = require('mongoose');

const BookSchema = new Schema ({
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
        required: true
    },
    stock:{
        type: String,
        required: true,
        default: 0
        
    }
}, {
    timestamps:true   //añade fecha de creación y de actualización
})

module.exports = model('Book', BookSchema);