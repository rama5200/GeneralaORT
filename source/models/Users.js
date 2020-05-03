const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');
const {Schema} = mongoose;


const userSchema = new Schema({
    email: String ,
    password: String,
});

//encriptacion
userSchema.methods.encryptPass = (password)=>{
    return bcrypt.hashSync(password, bcrypt.genSaltSync(3)); //encripta la pass 1 vez
};

//comparacion de password
userSchema.methods.comparePass = function (password){
    return bcrypt.compareSync(password, this.password); //devuelve boolean de la comparacion de la contraseña
};

module.exports = mongoose.model('user',userSchema);