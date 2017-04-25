/**
 * Created by zhy on 2017/4/20.
 */
var model = require('../../service/userService');

exports.login = function (req, res, next) {

};

exports.logout = function (req, res, next) {

};

exports.add = function (req, res, next) {
	model.createUser({
		username: req.params.name,
		password: req.params.pwd,
		avatar: '',
		phone: req.body.phone,
		email: req.body.email
	}).then(function () {
	
	})
};

exports.delete = function (req, res, next) {

};

exports.get = function (req, res, next) {

};

exports.list = function (req, res, next) {

};

exports.modify = function (req, res, next) {
	model.updateUser({})
};

exports.authorize = function (req, res, next) {

};