/**
 * Created by zhy on 2017/5/4.
 */
var express = require('express');
var router = express.Router();

var $ = require('../controllers/controller').user;

//登陆
router.route('/login.service')
	.post($.login);

//注册
router.route('/register.service')
	.post($.add);

module.exports = router;

