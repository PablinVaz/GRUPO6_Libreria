'use strict';

const express = require ("express");
const exphbs = require ('express-handlebars');
//Para ser lo más multiplataforma posible y evitar futuros problemas importamos el modulo PATH
//NO HACE FALTA INSTALARLO, YA VIENE INSTALADO EN NODE
const path = require ('path');
//MORGAN es un midelwawre de express y sirve para ver las peticiones que llegan al servidor
const morgan = require ('morgan');
//Requerimos methop override para poder borrar los libros y los discos de la base de datos
const methodOverride = require ('method-override');

// Inializaciones
const app = express();


// Setttings

    //Configuracion del puerto suministrado por el servidor o el puerto 3000.
    app.set('port', process.env.PORT || 3000);

    //Configuracion de donde esta la carpeta views; gracias a PATH quitamos la / y asi no tenemos problemas con el sistema opertivo.
    app.set('views', path.join(__dirname, 'views'));

    //Configuracion de un motor de plantillas
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'),'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname: '.hbs'
    }));

    //Le decimos que  lo que tiene que usar como 'view engine' es .hbs
    // 'view engine' es el motor de plantillas
    app.set('view engine', '.hbs');

// Middlewares

    // Usamos morgan y le decimos que solo funcione en desarrollo 
    app.use(morgan('dev'));
    //Con '({extended:false})' lo que hacemos es decirle al servidor que todos los datos recividos de formularios los almacene como un objeto JSON
    app.use(express.urlencoded({extended:false}));
    //Con '_method' le estamos diciendo el metodo que queremos usar. En el archivo all-books.hbs tenemos más detalles.
    app.use(methodOverride('_method'));
    

// Variables Globales

// Routes
app.use(require('./routes/index.routes'));
app.use(require('./routes/book.routes'));
// app.use(require('./routes/disc.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;