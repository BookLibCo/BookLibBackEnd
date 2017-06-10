/**
 * Created by zhy on 2017/5/4.
 */
const express = require('express');
const router  = express.Router();

const $ = require('../controllers/controller').user;

router.post('/login.service', $.login);         //登陆
router.post('/register.service', $.add);        //注册
router.get('/logout.service', $.logout);		//登出

module.exports = router;
