//modulos
const express = require('express');
const app = express();
const path= require('path');
const engine = require('ejs-mate');
const morgan = require('morgan');
const passport = require ('passport');
const session = require('express-session');

//Inicializaciones
require ('./source/database/dbsettings');
require ('./source/passport/local-auth');
require('./source/database/keys');

//configuracion del server
app.engine('ejs', engine);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.set('port',process.env.PORT || 3000);

//middlewares
app.use(morgan('dev'));
app.use(express.urlencoded({extended:false}));
app.use(session ({
    secret : 'Generala1234',
    resave:false,
    saveUninitialized:false
}));
app.use(passport.initialize());
app.use(passport.session());


//rutas
app.use('/',require('./source/routes/index.js'));

app.listen(app.get('port'), function(){
    console.log("Esta escuchando en el puerto ", app.get('port'));
});