/**
 * Created by zhy on 2017/4/8.
 */
const express = require('express');
const router  = express.Router();

const $  = require('../controllers/controller').req;
const $s = require('../middleware/session');

router.post('/add.service', $s.loginCheck, $s.companyCheck, $.add);			//发布需求
router.get('/list.service', $.list);										//查找需求
router.get('/one.service', $.one);											//根据id获得需求详细信息
router.post('/update.service', $s.loginCheck, $s.companyCheck, $.update);	//更改需求内容
router.post('/accept.service', $s.loginCheck, $s.studentCheck, $.accept);	//对需求进行投标
router.post('/fire.service', $s.loginCheck, $.fire);						//解除合作关系
router.post('/delete.service', $s.loginCheck, $s.companyCheck, $.delete);	// 取消（删除）已发布的需求
router.post('/judge.service', $s.loginCheck, $.judge);

module.exports = router;
