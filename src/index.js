'use strict';

//DOTENV: sirve para ocultar con variables de entorno nuestro codigo sensible.
require('dotenv').config(); //lo que hacemos es que cargue primero los archivos .env

//  LOS ARCHIVOS .env NUNCA SE SUBEN AL SERVIDOR, 
//    ¡¡¡¡¡¡SON PARA TRABAJAR EN DESARROLLO!!!!!!!!!!!
//  EN PRODUCCION EL SERVICIO DE HOSTING NOS VA A PERMITIR GUARDAR LAS VARIABLES DE ENTORNO APARTE

const app = require ('./server');
require('./database')

app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'))
})