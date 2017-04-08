var express = require('express');
var router = express.Router();

/* GET users listing. */
//用户主页
router.get('/', function (req, res, next) {
	res.render('users', {
		title: '用户信息',
		user: {     //用户信息
			name: 'mhbzhy',
			face: '/xxx/xxx.png',
			sch_name: 'bjtu',
			authorized: true
		},          //好友信息
		friend: [
			{
				name: 'honoka',
				face: '/xxx/xxx.png',
				authorized: false
			},
			{
				name: 'kotori',
				face: '/xxx/xxx.png',
				authorized: false
			}
		]
	});
});

//登陆
router.post('/login.service', function (req, res, next) {
	next();
});

//注册
router.post('/register.service', function (req, res, next) {
	next();
});

//认证
router.post('/auth.service', function (req, res, next) {
	next();
});

//登出
router.post('/logout.service', function (req, res, next) {
	next();
});

//获取单个用户的信息
router.post('/one.service', function (req, res, next) {
	next();
});

//补全／修改用户信息
router.post('/info_complete.service', function (req, res, next) {
	next();
});

//添加好友
router.post('/add_friend.service', function (req, res, next) {
	next();
});

//获得好友列表
router.post('/list_friend.service', function (req, res, next) {
	next();
});

module.exports = router;
