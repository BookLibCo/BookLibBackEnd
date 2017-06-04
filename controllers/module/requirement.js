/**
 * Created by zhy on 2017/4/20.
 */
const $     = require('../../service/RequirementService');
const other = require('../../other/other');

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
		next(other.solveDBErr(err, '创建需求失败'));
	});
};

exports.list = function (req, res, next) {
// todo list&search
	res.sendSuccess('list.service requested', 1);
};

exports.one = function (req, res, next) {
	return $.findRequirement('*', {
		id: req.body.id
	}).then((result) => {
		return result;
	}).catch((err) => {
		next(other.solveDBErr(err, '查询需求失败'));
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
		return result.id;
	}).catch((err) => {
		next(other.solveDBErr(err, '更新需求失败'));
	});
};

exports.delete = function (req, res, next) {
//todo
};

exports.fire = function (req, res, next) {
	//todo
};

exports.accept = function (req, res, next) {
	//todo
};

exports.judge = function (req, res, next) {
	//todo
};
	