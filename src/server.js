'use strict';

const express = require ("express");
const exphbs = require ('express-handlebars');
// Para ser lo más multiplataforma posible y evitar futuros problemas importamos el modulo PATH
// NO HACE FALTA INSTALARLO, YA VIENE INSTALADO EN NODE
const path = require ('path');
// MORGAN es un midelwawre de express y sirve para ver las peticiones que llegan al servidor
const morgan = require ('morgan');
// Requerimos methop override para poder borrar los libros y los discos de la base de datos
const methodOverride = require ('method-override');
// Esta libreria se usa para enviar mensajes; se ha creado un disco nuevo o se ha borrado un libro....
const flash = require('connect-flash');
// Express-session se usa para guardar los mensajes de connect-flash
const session = require('express-session');
// Con passport vamos a comprobar que el usuario esta registrado y mantener su sesión abierta
const passport = require('passport');

// Inializaciones
const app = express();
require('./config/passport');

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
    // con este modulo guardanos los mensajes en el servidor.
    app.use(session({
        secret: 'secret',
        resave: true,
        saveUninitialized: true
    }));
    // Usamos initialize para iniciar el proceso de comprobación
    app.use(passport.initialize());
    // Session sirve para dejar la sesion del cliente abierta mientras navega.
    app.use(passport.session());
    // Usamos flash para poder recibir los mensajes
    app.use(flash());

// Variables Globales
    app.use((req,res, next) =>{ // Aqui es donde recogemos los mensages y se envia al archivo MESSAGES.HBS
        res.locals.success_msg = req.flash('success_msg'); //Mensajes OK
        res.locals.error_msg = req.flash('error_msg'); // Mensajes de ERROR
        res.locals.error = req.flash('error');// Error al iniciar sesion
        res.locals.user = req.user || null;
        next();
    });

// Routes
    app.use(require('./routes/index.routes'));
    app.use(require('./routes/book.routes'));
    app.use(require('./routes/users.routes'));

// Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;