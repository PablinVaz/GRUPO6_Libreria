'use strict';

const mongoose = require ('mongoose');

//Ocultamos la direccion de la DB que esta en .env
const { LIBRERIA_APP_MONGODB_HOST, LIBRERIA_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URI = `mongodb://${LIBRERIA_APP_MONGODB_HOST}/${LIBRERIA_APP_MONGODB_DATABASE}`;

mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

// Con esto nos dice que estamos conectados a la base de datos
.then(db => console.log('Database is CONNECTED'))
//Capturamos el error
.catch(err => console.log(err));