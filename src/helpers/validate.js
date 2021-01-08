'use strict';

// Para poder proteger los productos de nuestra base de datos creamos un MIDDLEWARE: unua funcion que se ejecuta antes de que llegue a otra funcion.

const helpers = {};

 helpers.isValidate = (req, res, next) => {
     if (req.isAuthenticated()) {  // ISAUTHENTICATED es una funcion de PASSPORT y dentro de la funcion no se escribe nada porque por defecto es TRUE
         return next();  // aqui continuamos con el siguiente codigo que utilize esta funcion
     }
     // gracias al RETURN no se utiliza ELSE, si ISAUTHENTICATED es FALSE lo que esta dentro de la funcion no se utilizaria y pasaria a lo que esta despues del IF,
     // que es un mensaje de error y a redireccionar al login.
     req.flash('error_msg','Necesita iniciar sesión')
     res.redirect('/users/signin')
 }

 module.exports = helpers;