const express = require('express');
const router  = express.Router();

const $  = require('../controllers/controller').user;
const $s = require('../middleware/middleware').auth;

// router.use($s.loginCheck);

router.post('/auth.service', $.authorize);          //实名认证
router.get('/one.service', $.one);                  //获取指定用户信息
router.post('/info_complete.service', $.modify);    //更新用户信息
router.post('/add_friend.service', $.addFriend);    //添加好友
router.get('/list_friend.service', $.getFriends);   //好友列表

module.exports = router;
