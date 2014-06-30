var express = require('express');
var router = express.Router();
var os = require('os');
var hostname = os.hostname();
var domain =  process.env.MUON_DOMAIN || 'dev.muon.io';


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Hello World', hostname: hostname, domain: domain});
});

module.exports = router;
