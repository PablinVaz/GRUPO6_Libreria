const usersCtrl = {};

const User = require('../models/User')

usersCtrl.renderSignUpForm = (req,res) => {
    res.render('users/signup');
}
usersCtrl.signup = async (req,res) => {
    const errors = [];

    const {  username , name, email, password, confirm_password } = req.body;

    if (password != confirm_password){
        // Mensaje ERROR
        errors.push({text: 'Las contraseñas no coinciden.'});
    }
    if (password.length < 6) {
        // Mensaje ERROR
        errors.push({text: 'Las contraseñas deben tener más de 6 caracteres.'});
    }
    if (errors.length > 0) {
        res.render('users/signup', {
            errors,
            username,   // Al poner aqui USERNAME, NAME y EMAIL lo que hacemos es devolver =>
            name,       // los datos que envia el usuario a la base de datos para que  =>
            email       // asi no los tenga que volver a escribir, despues nos vamos al =>
            // archivo VIEWS/USERS/SIGNUP.HBS y dentro de los input en el atributo VALUE los escribimos =>
            // dentro de {{}} EJEMPLO: value="{{name}}".
        })
    } else{
        // Se crean 2 CONST para hacer una busqueda en la base de datos sobre el => 
        const nameUser = await User.findOne({ username: username }); // USERNAME
        const emailUser = await User.findOne({ email: email }); // EMAIL
        
        if (nameUser) { // Le decimos que si coinciden nos muestre un error y nos redireccione al =>>
            // registro para que el usuario cambie el nombre de usuario
            // Mensaje ERROR
            //Le decimos que guarde el mensaje 'El nombre de usuario ya existe!' en 'error_msg'
            req.flash('error_msg', 'El nombre de usuario ya existe!'); // AQUI EL ERROR
            res.redirect('/users/signup') // REDIRECCION
        }
        if (emailUser) {
            // Mensaje ERROR
            //Le decimos que guarde el mensaje 'Este email ya está en uso!' en 'error_msg'
            req.flash('error_msg', 'Este email ya está en uso!'); // AQUI EL ERROR
            res.redirect('/users/signup')// REDIRECCION
        } else {
            const newUSer = new User ({ username, name, email, password});
            //Encriptamos la contraseña llamando a un metodo que se crea en MODELS/USER.JS
            newUSer.password = await newUSer.encryptPassword(password)
            await newUSer.save();
            //Mensajes OK
            //Le decimos que guarde el mensaje 'Ya estas registrado!' en 'success_msg'
            req.flash('success_msg', 'Ya estas registrado!');
            res.redirect('/users/signin'); // REDIRECCION
        }
    }
}
usersCtrl.renderSigninForm = (req,res) => {
    res.render('users/signin');
}

usersCtrl.signin = (req,res) => {
    res.send('signin');
}

usersCtrl.logout = (req, res) => {
    res.send('logout');
}



module.exports = usersCtrl;