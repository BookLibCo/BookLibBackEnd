/**
 * Created by zhy on 2017/4/8.
 */
var express = require('express');
var router = express.Router();

var $ = require('../controllers/controller').request;

//添加需求
router.get('/', function (req, res, next) {
	res.redirect('../index.html');
});

router.route('/add.service')
	.post($.add);

router.route('/list.service')
	.post();

router.route('/info.service')
	.post();

router.route('/judge.service')
	.post();

router.route('/change.service')
	.post();

router.route('/fire.service')
	.post();

router.route('/cancel.service')
	.post();

module.exports = router;