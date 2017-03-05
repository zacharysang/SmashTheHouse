var express = require('express');
var Message = require('../models/news.js').Message;
var router = express.Router();

/* GET news page. */
router.get('/', function(req, res) {

  //this may be able to be changed
  Message.find(null,null,{
    limit:30,
    sort:{
      timeStamp: 1
    }
  }, function(err,messages){
    if(!err){
      res.render('news',{
        prev_messagees: messages
      });
    }else{
      res.render('error');
    }
  });
  //^

});

router.post('/',function(req,res){
  var msg = Message();
  msg.timeStamp = new Date();
  msg.sender = "Zak";
  msg.body = req.body.message;
  msg.save(function(err,savedMsg){
    if(err){
      console.log('failed to send message');
      res.send(err);
    }else{
      res.render('news');
      console.log('successfully saved message');
    }
  });
})

module.exports = router;
