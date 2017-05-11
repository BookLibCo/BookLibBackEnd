/**
 * Created by zhy on 2017/4/20.
 */
var $ = require('../../service/userService');

exports.login = function (req, res, next) {
	return $.authUser(
		req.body.name,
		req.body.password
	).then(function (result) {
		res.send(JSON.stringify(result.id));
	});
};

exports.logout = function (req, res, next) {
	return Promise.resolve(function () {
		req.session.destroy();
		res.send(true);
	})
};

exports.add = function (req, res, next) {
	return $.createUser({
		username: req.body.username,
		password: req.body.password,
		avatar: req.body.avatar,
		phone: req.body.phone,
		email: req.body.email,
		identity: req.body.identity
	}).then(function (result) {
		res.send(true);
	});
};

exports.delete = function (req, res, next) {

	// todo 封禁用户
};

exports.get = function (req, res, next) {
	return $.findUserAll(req.query.id)
		.then(function (result) {
			res.send(result);
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
