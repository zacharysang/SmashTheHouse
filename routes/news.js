var express = require('express');
var Message = require('../models/news.js').Message;
var router = express.Router();

/* GET news page. */
router.get('/', function(req, res) {
  res.render('news', { title: 'SmashTheHouse' });
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
