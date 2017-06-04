/**
 * Created by zhy on 2017/4/20.
 */
const $ = require('../../service/RequirementService');


exports.add = function (req, res, next) {
	let tags = req.body.tags || null;
	let avatar = null;      //未定
	
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
		return result.id;
	}).catch((err) => {
		err.errType = 'database';
		next(err);
	});
};

exports.list = function (req, res, next) {
// todo list&search
	res.send('list.service requested')
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
		user: req.body.userid,
		title: req.body.title,
		tags: req.body.tags,
		content: req.body.content,
		state: req.body.state
	}).then((result) => {
	
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
	