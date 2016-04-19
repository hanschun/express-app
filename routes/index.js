var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'calculator site', cotext: 'WireFlare calculator demo' });
});

module.exports = router;
