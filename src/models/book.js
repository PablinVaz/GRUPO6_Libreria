const {Schema, model} = require('mongoose0');

const BookSchema = new Schema ({
    title: {
        type: String,
        required:true
    },
    description: String,
    price:{
        type: Float32Array,
        required: true,
    }
}, {
    timestamps:true   //añade fecha de creación y de actualización
})