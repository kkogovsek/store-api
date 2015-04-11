var express = require('express'),
	router = express.Router(),
	v1 = require('./v1/');

router.use('/v1/', v1);

router.get('/', function(req, res) {
  res.render('index', { title: 'API' });
});

module.exports = router;