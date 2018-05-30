var Anime = require('../models/anime');

exports.all = function (req,res) {
    Anime.all(function (err,docs) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(docs);
    })
};

exports.findById = function (req,res) {
    Anime.findById(req.params.id,function (err,doc) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.send(doc);
    })
};

exports.create = function (req,res) {
    var anim={
        name:req.body.name,
        url:req.body.url,
        like:req.body.like,
        episod:req.body.episod,
        genre:req.body.genre,
        years:req.body.years,
        description:req.body.description
    };
   Anime.create(anim,function (err,result) {
       if(err){
           console.log(err);
           res.sendStatus(500);
       }
       res.send(anim);
   });
};

exports.update = function (req,res) {
    Anime.update(req.params.id,{name:req.body.name},function (err,result) {
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};

exports.delete = function (req,res) {
    Anime.delete(req.params.id,function (err,result){
        if(err){
            console.log(err);
            return res.sendStatus(500);
        }
        res.sendStatus(200);
    })
}