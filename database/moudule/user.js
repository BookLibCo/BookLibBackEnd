/**
 * Created by zhy on 2017/3/16.
 */
var query = require('../mysql');

//登陆校验
module.exports.login = function (name, password, callBack) {
	query('SELECT * FROM User ' +
		'WHERE name={name} '.format({
			name: name
		}) +
		'AND password={pasword}'.format({
			password: password
		}),
		function (err, vals, fields) {
			if (err) {
				callBack(false);
				return;
			}
			
			// authorize success
			if (vals.length != 0) {
				callBack(true, vals[0].id);
			}
		});
};

//插入新用户
module.exports.insert = function (req, callBack) {
	query('INSERT INTO User (name, email, password) VALUES ' +
		'("{name}", "{email}", "{password}")'.format({
			name: req.body.name,
			email: req.body.email,
			password: req.body.password
		}),
		function (err, vals, fields) {
			if (err) {
				callBack(false);
				return;
			}
			
			// authorize success
			if (vals.length != 0) {
				callBack(true);
			}
		});
};

//列出查询的用户
module.exports.list = function (callBack) {
	query('SELECT id, name, email FROM User',
		function (err, vals, fields) {
			if (err) {
				callBack(false, null, null);
				return;
			}
			
			callBack(true, vals, fields);
		});
};

//删除／封禁用户
module.exports.delete = function (id, callBack) {
	query('DELETE FROM User WHERE id="{id}"'.format({
			id: id
		}),
		function (err, vals, fields) {
			if (err) {
				callBack(false);
				return;
			}
			
			callBack(true);
		});
};

//与其他用户结为好友关系
module.exports.makeFriend = function (id, callBack) {
	query(''.format({
			id: id
		}),
		function (err, vals, fields) {
			if (err) {
				callBack(false);
				return;
			}
			
			callBack(true);
		});
};

//置为已认证状态
module.exports.auth = function (id, callBack) {
	query(''.format({
			id: id
		}),
		function (err, vals, fields) {
			if (err) {
				callBack(false);
				return;
			}
			
			callBack(true);
		});
};