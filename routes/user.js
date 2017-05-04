var express = require('express');
var router = express.Router();

var $ = require('../controllers/controller').user;

//认证
router.route('/auth.service')
	.post($.authorize);

//登出
router.route('/logout.service')
	.post(function(req, res, next) {
		req.session.uid !== undefined ? next() :
			res.sendErrorWithoutStatus('您尚未登陆');
	}, $.logout);

//获取单个用户的信息
router.route('/one.service')
	.get($.get);

//补全／修改用户信息
router.route('/info_complete.service')
	.post($.modify);

//添加好友
router.route('/add_friend.service')
	.post($.add);

//获得好友列表
router.route('/list_friend.service')
	.get($.get);

module.exports = router;
