const express = require('express');
const router = express.Router();

const $ = require('../controllers/controller').user;

//认证
router.route('/auth.service')
    .post($.authorize);

//获取单个用户的信息
router.route('/one.service')
    .get($.one);

//补全／修改用户信息
router.route('/info_complete.service')
    .post($.modify);

//添加好友
router.route('/add_friend.service')
    .post($.add);

//获得好友列表
router.route('/list_friend.service')
    .get($.list);

module.exports = router;
