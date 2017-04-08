/**
 * Created by zhy on 2017/4/8.
 */
var express = require('express');
var router = express.Router();

router.get('/', function (req, res, next) {
	res.redirect('../index.html');
});

router.post('/send', function (req, res, next) {
	next();
});

router.post('/list', function (req, res, next) {
	next();
});

module.exports = router;