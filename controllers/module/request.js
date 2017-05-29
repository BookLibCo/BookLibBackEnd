/**
 * Created by zhy on 2017/4/20.
 */
var $ = require('../../service/RequirementService');


exports.add = function (req, res, next) {
	var tags = req.body.tags || null;
	var avatar = null;      //未定
	
	return $.createRequirement({
		ownerId: req.session.uid,   //当前登录的用户id
		ownerDesc: req.body.description,
		avatar: avatar,
		title: req.body.title,
		tag: tags,
		content: req.body.content,
		acceptorId: null,           //创建时没有接受者
		state: req.body.state
	}).then((result) => {
		res.send({
		
		})
	}).catch((err) => {
		err.errType = 'database';
		next(err);
	});
};

exports.list = function (req, res, next) {
// todo list&search
};

exports.one = function (req, res, next) {
	return $.findRequirement('*', {
		id: req.body.id
	}).then((result) => {
	
	}).catch((err) => {
		err.errType = 'database';
		next(err);
	});
};

exports.update = function (req, res, next) {
	return $.updateRequirement({
		user: req.body.user_id,
		title: req.body.title,
		tags: req.body.tags,
		content: req.body.content,
		state: req.body.state
	}).then(function (result) {
	
	});
};

exports.delete = function (req, res, next) {
	
};

exports.fire = function (req, res, next) {
	
};

exports.accept = function (req, res, next) {
	
};

exports.judge = function (req, res, next) {
	
};
	