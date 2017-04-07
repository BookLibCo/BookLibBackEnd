/**
 * Created by zhy on 2017/3/16.
 */
var user = require('../../database/moudule/user');

module.exports.register = function (req, res, callBack) {
	user.insert({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	}, function (success) {
		if (!success) {
			res.send(false);
			return;
		}
		
		// change user status to unlogin
		req.session.uid = undefined;
		
		// tell page success
		res.send(true);
	});
};

module.exports.login = function (req, res, callBack) {
	user.authorize(req.body.name, req.body.password, function (success, id) {
		if (!success) {
			res.send(false);
			return;
		}
		
		// register session id
		req.session.uid = id;
		
		res.send(true);
	});
};
