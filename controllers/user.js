/**
 * Created by zhy on 2017/4/20.
 */
const $  = require('../service/userService');
const $f = require('../service/friendService');
const $e = require('../middleware/error');

// 登录
exports.login = function (req, res, next) {
	$.authUser(
		req.body.name,
		req.body.password
	).then((result) => {
		res.sendSuccess('登录成功', {
			userid: result.userid
		});
	}).catch((err) => {
		next($e.solveCusErr(err, '登录失败'));
	});
};

// 注册
exports.add = function (req, res, next) {
	$.createUser({
		username: req.body.username,
		password: req.body.password,
		avatar: req.body.avatar,
		phone: req.body.phone,
		email: req.body.email,
		identity: req.body.identity
	}).then((result) => {
		res.sendSuccess('注册成功', {
			userid: result.userid
		});
	}).catch((err) => {
		next($e.solveCusErr(err, '注册失败'));
	});
};

// 登出
exports.logout = function (req, res, next) {
	req.session.destroy();
	res.sendSuccess('注销成功', null);
};

//todo: 实名认证
exports.authorize = function (req, res, next) {
	res.sendSuccess('success', null);
};

// 更新用户信息
exports.modify = function (req, res, next) {
	$.updateUser(req.body.data, req.session.uid)
		.then((result) => {
			res.sendSuccess('success', result);
		})
		.catch((err) => {
			next($e.solveCusErr(err, '更新用户信息失败'));
		});
};

// 获取指定用户信息
exports.one = function (req, res, next) {
	$.findUserAll(req.query.userid)
		.then((result) => {
			res.sendSuccess('success', result);
		})
		.catch((err) => {
			next($e.solveCusErr(err, '数据库错误'));
		});
};

// 添加好友
exports.addFriend = function (req, res, next) {
	$f.createFriend(req.session.uid, req.body.userid)
		.then((result) => {
			res.sendSuccess('success', result.userid);
		})
		.catch((err) => {
			next($e.solveCusErr(err, '添加好友失败'));
		});
};

// 好友列表
exports.getFriends = function (req, res, next) {
	$f.findFriends(req.body.userid)
		.then((result) => {
			res.sendSuccess('success', result);
		})
		.catch((err) => {
			next($e.solveCusErr(err, '查找朋友失败'));
		});
};

// todo: 封禁用户
exports.delete = function (req, res, next) {
};

// todo: list all users (admin)
exports.list = function (req, res, next) {
};
