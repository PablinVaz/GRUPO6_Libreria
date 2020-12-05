const mongoose = require('mongoose')

//Ocultamos la direccion de la DB que esta en .env
const { LIBRERIA_APP_MONGODB_HOST, LIBRERIA_APP_MONGODB_DATABASE } = process.env;
const MONGODB_URL = `mongodb://${LIBRERIA_APP_MONGODB_HOST}/${LIBRERIA_APP_MONGODB_DATABASE}`;


//Conectamos con la DB
mongoose.connect(MONGODB_URL, {
    //correccion de mensages de advertencia de mogoose
    useUnifiedTopology: true,
    useNewUrlParser: true
})
// cuando se conecta, muestra por consola.
.then(db => console.log ('Database is connected'))
//capturamos error y lo mostramos por consola 
.catch(err => console.log(err));