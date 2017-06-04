const express = require('express');
const router = express.Router();

// const $ = require('../controllers/controller');

/* GET home page. */
router.get('/', (req, res) => {
    res.redirect('/MyCollerApp2/index.html');
});

const routerStatic = express.Router();
const routerChat = express.Router();

const session = require('../middleware/auth');

router.use('/MyCollerApp2', routerStatic);
router.use("/ChatRoom", routerChat);

const controller = require('../controllers/controller');

// MyCollerApp2(主要部分)
routerStatic.get('/myinformation.html', (req, res, next) => {
	res.render('myinformation', {
		myStates: 'Coming Soon',    //我的状态
		visitNum: 'Coming Soon',    //访问数
		perTag: [                   //需求tag
			'123', '456', '789'
		],
		newReqIntro: ''             //需求介绍
	})
});

//fixme: 此处为模版示意，所返回的数据可能不正确或无法请求
routerStatic.get('/tab-webview-subpage-about.html', (req, res, next) => {
	Promise.resolve([
		controller.user.one(req, res, next),
		controller.requirement.one(req, res, next)
	]).then((userInfo, reqInfo) => {
		//从返回值中选取数据
		res.render('tab-webview-subpage-about', {
			proTitle: reqInfo.title,   //需求标题 ex:图片处理以及卷积神经网络研究
			PerIntro: userInfo.intro,   //个人介绍
			reqtag: [
				'123', '456', '789'
			],              //需求标签
			prodesc: reqInfo.desc,    //需求描述
			proReq: reqInfo.req      //项目要求
		})
    })
	
});

routerStatic.get('/tab-webview-subpage-chat.html', (req, res, next) => {
    res.render('tab-webview-subpage-chat', {
        FriendName: '',     //朋友名称
        FriendPosition: '', //朋友地位／职位
        FirendTel: ''       //朋友联系方式
    })
});

routerStatic.get('/tab-webview-subpage-contact.html', (req, res, next) => {
    res.render('tab-webview-subpage-contact', {
        myStates: 'Coming Soon',    //我的状态
        visitNum: 'Coming Soon',    //访问数
        perTag: [                   //需求tag
            '123', '456', '789'
        ]
    })
});

routerStatic.get('/tab-webview-subpage-req_information.html', (req, res) => {
    res.render('tab-webview-subpage-req_information', {
        proTitle: '',       //需求标题 ex:图片处理以及卷积神经网络研究
        PerIntro: '',       //个人介绍
        reqtag: [
            '123', '456', '789'
        ],                  //需求标签
        prodesc: '',        //需求描述
        proReq: '',         //项目要求
        relPerson: '',      //项目发起人的实名
        PerPosition: '',    //职位
        skill: '',          //技能
        perTag: [           //需求tag
            '123', '456', '789'
        ],
        fullReqDesc: ''     //需求的详细描述信息
    })
});

// ChatRoom 聊天室
// 检查是否登陆
routerChat.use(session.loginCheck);

// test.js
// var userService = require('../service/userService');
// router.get('/test.js', function (req, res) {
// 	userService.test.js().then(function (result) {
// 		console.log(result);
// 	})
// });


module.exports = router;
