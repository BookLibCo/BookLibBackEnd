var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
    res.redirect('/index.html');
});

// MyCollerApp2
var router1 = express.Router();

router.use('/MyCollerApp2', router1);

router1.get('/myinformation.html', function (req, res) {
	res.render('myinformation.html', {
		myStates: 'Coming Soon',    //我的状态
		visitNum: 'Coming Soon',    //访问数
		perTag: [   //需求tag
			'123', '456', '789'
		],
		newReqIntro: '' //需求介绍
	})
});

// test
var userService = require('../service/userService');
router.get('/test', function (req, res) {
	userService.test().then(function (result) {
		console.log(result);
	})
});

// todo: 使用模版生成页面


module.exports = router;
