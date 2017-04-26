/**
 * Created by zhy on 2017/4/8.
 */
var express = require('express');
var router = express.Router();

var controller = require('../controllers/controller');
var $ = null;

router.use(function (req, res, next) {
	$ = controller(req, res).message;
	next();
});

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