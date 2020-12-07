const express = require("express");
const exphbs = require('express-handlebars');
//Para ser lo más multiplataforma posible y evitar futuros problemas importamos el modulo PATH
const path = require ('path');

//Inializaciones
const app = express();

//Setttings

    //Configuracion del puerto suministrado por el servidor o el puerto 3000.
    app.set("port", process.env.PORT || 3000);
    //Configuracion de donde esta la carpeta views; gracias a PATH quitamos la / y asi no tenemos problemas con el sistema opertivo.
    app.set("views", path.join(__dirname, "views"));
    //Configuracion de un motor de plantillas
    app.engine('.hbs', exphbs({
        defaultLayout: 'main',
        layoutsDir: path.join(app.get('views'), 'layouts'),
        partialsDir: path.join(app.get('views'), 'partials'),
        extname:'.hbs'
    }));
    app.set('view engine', '.hbs');

//Peticiones

    //Con esta línea lo que hacemos es decirle al servidor que todos los datos recividos de formularios los almacene como un objeto JSON
    app.use(express.urlencoded({extended:false}));

//Variables Globales

//Rutas

app.use(require('./routes/index.routes'));

//Static files
app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
