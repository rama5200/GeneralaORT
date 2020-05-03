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
/*
router.post('/signup',function(req,res,next){
    //res.render('lobby');
    console.log(req.body);
    res.redirect('/lobby');
});
*/

router.post('/signup', passport.authenticate('localsignup' ,{
    successRedirect: '/lobby',
    failureRedirect: '/',
    passReqToCallback: true
}));

router.get('/lobby',function(req,res,next){
    res.render('lobby');
});

module.exports = router;