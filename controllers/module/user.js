/**
 * Created by zhy on 2017/4/20.
 */
const $     = require('../../service/userService');
const $f    = require('../../service/friendService');
const other = require('../../other/other');

exports.login = function (req, next) {
	return $.authUser(
		req.body.name,
		req.body.password
	).then((result) => {
		return result.userid;
	}).catch((err) => {
		next(other.solveDBErr(err, '登录失败'));
	});
};

exports.logout = function (req, next) {
	return Promise.resolve(function () {
		req.session.destroy();
		return true;
	}).catch((err) => {
		next(other.solveDBErr(err, '注销失败'));
	});
};

exports.add = function (req, next) {
	return $.createUser({
		username: req.body.username,
		password: req.body.password,
		avatar: req.body.avatar,
		phone: req.body.phone,
		email: req.body.email,
		identity: req.body.identity
	}).then((result) => {
		return result.userid;
	}).catch((err) => {
		next(other.solveDBErr(err, '注册失败'));
	});
};

exports.delete = function (req, next) {
	// todo: 封禁用户
};

exports.one = function (req, next) {
	return $.findUserAll(req.query.userid)
		.then((result) => {
			return result;
		})
		.catch((err) => {
			next(other.solveDBErr(err, '数据库错误'));
		});
};

exports.list = function (next) {
//	todo: list all users (admin)
};

exports.getFriends = function (userId, next) {
	return $f.findFriends(userId)
		.then((result) => {
			return result;
		})
		.catch((err) => {
			next(other.solveDBErr(err, '查找朋友失败'));
		});
};

exports.modify = function (userId, body, next) {
	let newValue = {};
	
	for (let key in body) {
		newValue[key] = body[key];
	}
	
	return $.updateUser(newValue, userId)
		.then((result) => {
			return result;
		})
		.catch((err) => {
			next(other.solveDBErr(err, '更新用户信息失败'));
		});
};

exports.authorize = function (req, next) {
//	todo: 实名认证
};
