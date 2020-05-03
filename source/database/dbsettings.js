//Esto hace la conexion con el cluster de mongodb

const mongoose = require('mongoose');
const {mongoDB} = require('./keys.js');
const mongo = require('mongodb');


mongoose.connect(mongoDB.uriDatabase, {useNewUrlParser:true, useUnifiedTopology: true})
    .then(db=> console.log('Database conectada'))
    .catch(err=>console.log('error de keys'));
    

//Pass OK
//const uriDatabase = "mongodb+srv://admin:Generala1234@cluster0-km6or.mongodb.net/test?authSource=admin&replicaSet=Cluster0-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true";
