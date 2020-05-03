const passport = require('passport');
const localstrat = require('passport-local').Strategy;
const User = require('../models/user');

passport.serializeUser( function (user, done){
    done(null, user.id);
});

passport.deserializeUser( async function (id, done){
   const user= await User.findById(id);
   done(null,user)
});

 passport.use('localsignup', new localstrat({
    usernameField: 'email',
    passwordField: 'password',
    passReqToCallback:true 
 }, async (req, email, pass, done) => {
    const user = new User(); //Nuevo USER
      user.email=email;
      user.password=pass;
      await user.save();    
   done (null, user);
 }));