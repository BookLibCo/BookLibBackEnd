/**
 * Created by zhy on 2017/4/20.
 */
var $ = require('../../service/userService');

exports.login = function (req, res, next) {
	$.findUser([
		'id', 'name'
	], {
		name: req.params.name,
		password: req.params.password
	}, error, function (result) {
		//	todo
	})
};

exports.logout = function (req, res, next) {
	req.session.destroy();
	res.send(true);
};

exports.add = function (req, res, next) {
	$.createUser({
		username: req.params.name,
		password: req.params.pwd,
		avatar: '',
		phone: req.body.phone,
		email: req.body.email
	}, function (err) {
		res.send(err);
	}, function (result) {
		// todo
	})
};

exports.delete = function (req, res, next) {

};

exports.get = function (req, res, next) {
	$.findUser('*', {
		id: req.params.id
	}, function (err) {
		res.send(err);
	}, function (result) {
	//	todo
	})
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