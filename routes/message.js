/**
 * Created by zhy on 2017/4/8.
 */
var express = require('express');
var router  = express.Router();

var $ = require('../controllers/controller').message;

router.route('/send.service')
	.post(function (req, res, next) {
		next()
	});

router.route('/list.service')
	.post(function (req, res, next) {
		next()
	});

module.exports = router;