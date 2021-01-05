const { Schema, model } = require ('mongoose');

const BookSchema =new Schema ({
    
    title:{
        type : String,
        required: true
    },
    publisher: {
        type : String,
        required: true
    },
    stock:{
        type : Number,
        required: true
    },
    price:{
        type : String,
        required: true
    }
},{
    timestamps: true
})

module.exports = model('Book', BookSchema);