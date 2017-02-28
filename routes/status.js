var express = require('express');
var router = express.Router();
var os = require('os');
var dns = require('dns');

/* GET news page. */
router.get('/', function(req, res,next) {
  res.render('status', { protocol: 'http' , uptime: os.uptime(), ipaddr: String(os.networkInterfaces()), totalMem: os.totalmem()/1000000000, freeMem: os.freemem()/1000000000});
});

module.exports = router;
