var express = require('express');
var router = express.Router();
var partial = require('../app.js').partial;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'SmashTheHouse', 
    isPartial: partial
  });
});

module.exports = router;
