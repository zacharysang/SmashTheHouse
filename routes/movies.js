var express = require('express');
var router = express.Router();
var partial = require('../app.js').partial;

/* GET news page. */
router.get('/', function(req, res) {
  res.render('movies', { 
    title: 'SmashTheHouse', 
    isPartial: partial
  });
});

module.exports = router;