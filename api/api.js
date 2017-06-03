var express = require('express')
    ,Game = require('../models/game');

var router = express.Router();
router.get('/movies',function(req,res){
  var movies = [{
        "title": "f8"
        ,"description": "one last job"
        ,"releaseDate": "12/12/12"
    }
    ,{
        "title":"star wars"
        ,"description": "the ewok of the night"
        ,"releaseDate": "12/12/17"
    }
    ,{
        "title": "that one super hero movie"
        ,"description": "somethings never change, but sometimes they do.."
        ,"releaseDate": "12/12/16"
    }];
  res.send(movies);
});

router.get('/games',function(req,res){
    console.log('get received on games');
    //check which games are requested
    //var games = req.games;

    //query db for games
    var dbGames = Game.find({},function(err,data){
        if(err){
            data = ['none'];
        }

        return data;
    });

    console.log(`db res: ${JSON.stringify(dbGames)}`);

});

module.exports = router;