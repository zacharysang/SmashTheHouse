var express = require('express');
var router = express.Router();

/* GET news page. */
router.get('/', function(req, res) {
  res.render('news', { title: 'SmashTheHouse' });
});

router.post('/',function(req,res){
  console.log('posted successfully!');
  res.render('news');
})

module.exports = router;
