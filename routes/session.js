/**
 * Created by zhy on 2017/5/4.
 */
const express = require('express');
const router  = express.Router();

const $ = require('../controllers/controller').user;

//登陆
router.route('/login.service')
	.post((req, res, next) => {
		$.login(req, res, next).then((userId) => {
			res.sendSuccess('登录成功', {
				userid: userId
			});
		});
	});

//注册
router.route('/register.service')
	.post((req, res, next) => {
		$.add(req, res, next).then((userid) => {
			res.sendSuccess('注册成功', {
				userid: userid
			});
		});
	});

//登出
router.route('/logout.service')
	.get(
		(req, res, next) => {
			req.session.uid !== undefined ? next() :
				res.sendError('您尚未登陆');
		},
		(req, res, next) => {
			$.logout(req, res, next).then((bool) => {
				if (bool) {
					res.send(JSON.stringify({
						msg: '注销成功',
						status: true,
						rc: 0
					}));
				}
			});
		}
	);


module.exports = router;
