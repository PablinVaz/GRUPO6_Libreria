'use strict';

const helpers = {};

 helpers.isValidate = (req, res, next) => {
     if (req.isAuthenticated()) {
         return next();
     }
     req.flash('error_msg','Necesita iniciar sesión')
     res.redirect('/users/signin')
 }

 module.exports = helpers;