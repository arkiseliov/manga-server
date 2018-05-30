var express = require('express');
var bodyParser = require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID=require('mongodb').ObjectID;

var app = express();
var db = require('./db');
var animeController=require('./controllers/anime');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.all(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'DELETE, PUT');
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

var anime = [];

app.get('/',function(req,res){
    res.send('Hello API');
});

//gets id
app.get('/anime/:id',exhibitionsController.findById);


// gets full db
app.get('/anime',exhibitionsController.all);


//posts info to db
app.post('/anime',exhibitionsController.create);

//updates info in id's
app.put('/anime/:id',exhibitionsController.update);


//removing current info by id
app.delete('/anime/:id',exhibitionsController.delete);


db.connect('mongodb://Artem:1234@ds241530.mlab.com:41530/manga-view',function (err) {
    if (err) {
        return console.log(err);
    }
    app.listen(process.env.PORT || 5000);
});