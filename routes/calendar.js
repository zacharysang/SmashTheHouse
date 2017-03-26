var express = require('express');
var router = express.Router();

/* GET news page. */
router.get('/', function(req, res) {
  res.render('calendar', { 
    title: 'SmashTheHouse' , 
    isPartial: require('../app.js').partial
  });
});

module.exports = router;