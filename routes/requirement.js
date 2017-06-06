/**
 * Created by zhy on 2017/4/8.
 */
const express = require('express');
const router  = express.Router();

const $ = require('../controllers/controller').req;

//发布需求
router.route('/add.service')
	.post((req, res, next) => {
		$.add(req, res, next).then((reqId) => {
			res.sendSuccess('创建需求成功', reqId);
		});
	});

//查找需求
router.route('/list.service')
	.get((req, res, next) => {
		$.list(req, res, next);
		// todo
	});

//根据id获得需求详细信息
router.route('/one.service')
	.get((req, res, next) => {
		$.one(req, res, next).then((req) => {
			res.sendSuccess('查询需求详细信息成功', req);
		});
	});

//更改需求内容
router.route('/update.service')
	.post((req, res, next) => {
		$.update(req, res, next).then((reqId) => {
			res.sendSuccess('修改需求成功', reqId);
		});
	});

//对需求进行投标
router.route('/accept.service')
	.post((req, res, next) => {
		$.accept(req, res, next);
		// todo
	});

//解除合作关系
router.route('/fire.service')
	.post((req, res, next) => {
		$.fire(req, res, next);
		// todo
	});

// 取消（删除）已发布的需求
router.route('/delete.service')
	.post((req, res, next) => {
		$.delete(req, res, next);
		// todo
	});

router.route('/judge.service')
	.post((req, res, next) => {
		$.judge(req, res, next);
		// todo
	});

module.exports = router;
