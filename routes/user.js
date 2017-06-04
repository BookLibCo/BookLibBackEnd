const express = require('express');
const router  = express.Router();

const $ = require('../controllers/controller').user;

//实名认证
router.route('/auth.service')
	.post((req, res, next) => {
		$.authorize(req, res, next);
	});

//获取指定用户信息
router.route('/one.service')
	.get((req, res, next) => {
		$.one(req, res, next).then((userInfo) => {
		
		});
	});

//更新用户信息
router.route('/info_complete.service')
	.post((req, res, next) => {
		$.modify(req, res, next)
	});

//添加好友
router.route('/add_friend.service')
	.post((req, res, next) => {
		$.add(req, res, next)
	});

//好友列表
router.route('/list_friend.service')
	.get((req, res, next) => {
		$.list(req, res, next)
	});

module.exports = router;
