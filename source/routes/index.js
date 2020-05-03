const express = require('express');
const router = express.Router();
const passport = require('passport'); 


//INDEX
router.get('/', function (req,res,next){
    res.render('index');
});

//REGISTER
router.get('/signup',function (req,res,next){
    res.render('signup');
});

router.post('/signup', passport.authenticate('localsignup' ,{
    successRedirect: '/lobby',
    failureRedirect: '/signup',
    passReqToCallback: true
}));

router.get('/lobby',function(req,res,next){
    res.render('lobby');
});

router.get('/signin', function(req,res,next){
    res.render('signin');
})

router.post('/signin',passport.authenticate('localsignin' ,{
    successRedirect: '/lobby',
    failureRedirect: '/signin',
    passReqToCallback: true
}));

module.exports = router;