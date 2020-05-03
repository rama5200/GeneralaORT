const passport = require('passport');
const localstrat = require('passport-local').Strategy;
const User = require('../models/Users');


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
   const userexist = await User.findOne({email: email});
      if(userexist){
         return done(null, false, req.flash('signupMessage','El email ya esta en uso') );
      }
      else{
         //Registra el User
            const newUser = new User();
            newUser.email=email;
            newUser.password= newUser.encryptPass(pass);
            await newUser.save();    
            done (null, newUser);
      }
})
);

passport.use('localsignin', new localstrat(
   {
      usernameField: 'email',
      passwordField: 'password',
      passReqToCallback:true
   },

   async(req,email,pass,done)=>
   {
      const user = await User.findOne({email: email});
      if (user)  
      {
         if(user.comparePass(pass))
         {
            return done(null, user);
         }else{
            return done(null,false, req.flash('signinMessage','La contraseña es incorrecta'));
         }
      }else{
         return done (null, false, req.flash('signinMessage','El usuario no existe'));
      }
   }));