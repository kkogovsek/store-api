var express = require('express'),
	router = express.Router(),
	api = require('./api/');

router.use('/api/', api);

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
