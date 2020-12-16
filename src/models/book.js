const {Schema, model} = require('mongoose');

const BookSchema = new Schema ({
    title: {
        type: String,
        required:true
    },
    description: String,
    price:{
        type: Number,
        default: 0,
        required: true,
    }
}, {
    timestamps:true   //añade fecha de creación y de actualización
})

module.exports = model('Book', BookSchema);