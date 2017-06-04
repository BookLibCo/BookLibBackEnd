/**
 * Created by zhy on 2017/4/20.
 */
const $     = require('../../service/userService');
const other = require('../../other/other');

exports.login = function (req, res, next) {
	return $.authUser(
		req.body.name,
		req.body.password
	).then((result) => {
		return result.userid;
	}).catch((err) => {
		next(other.solveDBErr(err, '登录失败'));
	});
};

exports.logout = function (req, res, next) {
	return Promise.resolve(function () {
		req.session.destroy();
		return true;
	}).catch((err) => {
		next(other.solveDBErr(err, '注销失败'));
	});
};

exports.add = function (req, res, next) {
	$.createUser({
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

exports.delete = function (req, res, next) {
	// todo 封禁用户
};

exports.one = function (req, res, next) {
	return $.findUserAll(req.query.id)
		.then((result) => {
			return result;
		})
		.catch((err) => {
			next(other.solveDBErr(err, '数据库错误'));
		});
};

exports.list = function (req, res, next) {
//	todo
};

exports.modify = function (req, res, next) {
//	todo
};

exports.authorize = function (req, res, next) {
//	todo
};
