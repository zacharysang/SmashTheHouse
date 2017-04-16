var express = require('express');

var router = express.Router();
router.get('*',function(req,res){
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

module.exports = router;