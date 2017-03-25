var express = require('express');
var Message = require('../models/news.js').Message;
var router = express.Router();
var db_connected = require('../app.js').db_connected;

const daysofweek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday"];

/* GET news page. */
router.get('/', renderMessages);

router.post('/',function(req,res){
  var msg = Message();
  var currTime = new Date();
  msg.timeStamp = formatTimeStamp(currTime);
  msg.sender = "Zak";
  msg.body = req.body.message;
  msg.save(function(err,savedMsg){
    if(err){
      console.log('failed to send message');
      res.render('error');
    }else{
      renderMessages(req,res);
    }
  });
})

//helper functions go below here//

function formatTimeStamp(currTime){
  return currTime.getHours() + ":" + (currTime.getMinutes() < 10 ? "0" + currTime.getMinutes() : currTime.getMinutes()) + " (" + daysofweek[currTime.getDay()] +", " + (currTime.getMonth()+1) + "/" + currTime.getDate() + ")";
}

function renderMessages(req, res){
  if(db_connected){
    //these arguments may be able to be changed
    Message.find(null,null,{
      limit:30,
      sort:{
        timeStamp: 1
      }
    }, function(err,messages){
      if(!err){
        res.render('news',{
          prev_messages: messages,
          isPartial: req.query.partial == "true"
        });
      } else {
        res.render('error');
      }
    });
  } else {
    res.render('news',{
      prev_messages: [],
      isPartial: req.query.partial == "true"
    });
  }
}

module.exports = router;
