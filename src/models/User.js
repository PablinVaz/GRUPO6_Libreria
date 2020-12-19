const {Schema, model} = require('mongoose');
const bcrypt = require('bcryptjs');

const UserSchema = new Schema({
    name: { type: String, required:true},
    lname: { type: String, required:true},
    email: { type: String, unique:true, required:true},
    password: { type: String, required:true},
}, {
    timestamps: true
});

// MAGIA MEGAPODEROSA DE SEGURIDAD
    //Cifrar contraseña con BCRYPT
    UserSchema.methods.encryPassword = async password => {
        const salt = await bcrypt.genSalt(10);
        return await bcrypt.hash(password, salt);
    };
    //Comparar contraseña
    UserSchema.methods.matchPassword = function (password) {
        return await bcrypt.compare(password, this.password)
    }

module.exports = model('User', UserSchema)