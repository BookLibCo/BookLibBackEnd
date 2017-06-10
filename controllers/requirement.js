/**
 * Created by zhy on 2017/4/20.
 */
const $  = require('../service/requirementService');
const $e = require('../middleware/error');

// 发布需求
exports.add = function (req, res, next) {
	let tags = req.body.tags || null;
	let avatar = null;      //未定
	
	$.createRequirement({
		ownerId: req.session.uid,   //当前登录的用户id
		ownerDesc: req.body.description,
		avatar: avatar,
		title: req.body.title,
		tag: tags,
		content: req.body.content,
		acceptorId: null,           //创建时没有接受者
		state: req.body.state
	}).then((result) => {
		res.sendSuccess('创建需求成功', result.reqid);
	}).catch((err) => {
		next($e.solveCusErr(err, '创建需求失败'));
	});
};

// todo: 查找需求(list&search)
exports.list = function (req, res, next) {
	res.sendSuccess('list.service requested', 1);
};

// 根据id获得需求详细信息
exports.one = function (req, res, next) {
	$.findRequirement('*', {
		id: req.body.id
	}).then((result) => {
		res.sendSuccess('查询需求详细信息成功', result);
	}).catch((err) => {
		next($e.solveCusErr(err, '查询需求失败'));
	});
};

// 更改需求内容
exports.update = function (req, res, next) {
	$.updateRequirement({
		user: req.body.userid,
		title: req.body.title,
		tags: req.body.tags,
		content: req.body.content,
		state: req.body.state
	}).then((result) => {
		res.sendSuccess('修改需求成功', result.reqid);
	}).catch((err) => {
		next($e.solveCusErr(err, '更新需求失败'));
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
	