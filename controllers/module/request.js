/**
 * Created by zhy on 2017/4/20.
 */
var $ = require('../../service/RequirementService');


exports.add = function (req, res, next) {
	return $.createRequirement({
		ownerId: req.body.ownerId,
		ownerDesc: req.body.ownerDesc,
		avatar: req.body.avatar,
		title: req.body.title,
		tag: req.body.tag,
		content: req.body.content,
		acceptorId: req.body.acceptorId,
		state: req.body.state
	}).then(function (result) {
	
	});
};

exports.list = function (req, res, next) {
// todo list&search
};

exports.one = function (req, res, next) {
	return $.findRequirement('*', {
		id: req.body.id
	}).then(function (result) {
	
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
	