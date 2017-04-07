var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function (req, res, next) {
	res.render('users', {
		username: 'respond with a resource'
	});
});

router.get('/login', function (req, res, next) {
	res.render('login', {
		title: '欢迎注册校园合伙人'
	})
});

module.exports = router;
