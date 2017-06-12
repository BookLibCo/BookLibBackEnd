const express = require('express');
const router  = express.Router();

/* GET home page. */
router.get('/', (req, res) => {
	res.redirect('/MyCollerApp2/index.html');
});

const routerStatic = express.Router();
const routerChat   = express.Router();

const $s = require('../middleware/session');

router.use('/MyCollerApp2', routerStatic);
router.use('/ChatRoom', $s.loginCheck, routerChat);

const $ = require('../controllers/controller').template;

routerStatic.get('/myinformation.html', $s.loginCheck, $.myInfo);                  //个人信息
routerStatic.get('/tab-webview-subpage-about.html', $.requirement);                //需求详情
routerStatic.get('/tab-webview-subpage-chat.html', $.chat);
routerStatic.get('/tab-webview-subpage-contact.html', $s.loginCheck, $.contact);
routerStatic.get('/tab-webview-subpage-req_information.html', $.reqInfo);

// ChatRoom 聊天室
// routerChat.get('/index.html');

// test.js
// var userService = require('../service/userService');
// router.get('/test.js', function (req, res) {
// 	userService.test.js().then(function (result) {
// 		console.log(result);
// 	})
// });

module.exports = router;
