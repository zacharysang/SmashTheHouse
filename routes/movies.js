var express = require('express');
var router = express.Router();

/* GET news page. */
router.get('/', function(req, res) {
  res.render('movies', { title: 'SmashTheHouse' });
});

module.exports = router;