/**
 * Created by zhy on 2017/4/8.
 */
var express = require('express');
var router = express.Router();

var $ = require('../controllers/controller').request;

router.route('/add.service')
	.post($.add);

router.route('/list.service')
	.post($.list);

router.route('/info.service')
	.post($.one);

router.route('/judge.service')
	.post($.judge);

router.route('/change.service')
	.post($.update);

router.route('/fire.service')
	.post($.fire);

router.route('/cancel.service')
	.post($.delete);

module.exports = router;
