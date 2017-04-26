/**
 * Created by zhy on 2017/4/20.
 */
var $ = require('../../service/requirementService');


exports.add = function (req, res, next) {
	$.createRequirement({
		user: req.params.user_id,
		title: req.params.title,
		tags: req.params.tags,
		content: req.params.content,
		state: req.params.state
	}, function(err) {
		res.send(err);
	}, function (result) {
		
	})
};

exports.list = function (req, res, next) {
// todo list&search
};

exports.one = function (req, res, next) {
	$.findRequirement('*', {
		id: req.params.id
	}, function (err) {
		res.send(err);
	}, function (result) {
		// todo
	})
};

exports.update = function (req, res, next) {
	$.updateRequirement({
		user: req.params.user_id,
		title: req.params.title,
		tags: req.params.tags,
		content: req.params.content,
		state: req.params.state
	}, function (err) {
		res.send(err);
	}, function (result) {
		// todo
	})
};

exports.delete = function (req, res, next) {
	
};

exports.fire = function (req, res, next) {
	
};

exports.accept = function (req, res, next) {
	
};

exports.judge = function (req, res, next) {
	
};
	