/**
 * Created by zhy on 2017/4/20.
 */
var $ = require('../../service/userService');

module.exports = function (req, res) {
	function error(err) {
		res.send(err)
	}
	
	this.login = function () {
		$.findUser([
			'id', 'name'
		], {
			name: req.params.name,
			password: req.params.password
		}, error, function (result) {
		//	todo
		})
	};
	
	this.logout = function () {
		req.session.destroy();
		res.send(true);
	};
	
	this.add = function () {
		$.createUser({
			username: req.params.name,
			password: req.params.pwd,
			avatar: '',
			phone: req.body.phone,
			email: req.body.email
		}, error, function (result) {
		//	todo
		})
	};
	
	this.delete = function () {
		
	};
	
	this.get = function () {
		
	};
	
	this.list = function () {
		
	};
	
	this.modify = function () {
		$.updateUser({})
	};
	
	this.authorize = function () {
		
	};
};

