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

router.route('/one.service')
	.post($.one);

router.route('/judge.service')
	.post($.judge);

router.route('/update.service')
	.post($.update);

router.route('/fire.service')
	.post($.fire);

router.route('/delete.service')
	.post($.delete);

router.route('/accept.service')
	.post($.accept);

module.exports = router;
