var express = require('express');
var router = express.Router();

var $ = require('../controllers/controller').user;

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
router.route('/login.service')
	.post($.login);

//注册
router.route('/register.service')
	.post($.add);

//认证
router.route('/auth.service')
	.post($.authorize);

//登出
router.route('/logout.service')
	.post($.logout);

//获取单个用户的信息
router.route('/one.service')
	.get($.get);

//补全／修改用户信息
router.route('/info_complete.service')
	.post($.modify);

//添加好友
router.route('/add_friend.service')
	.post($.add);

//获得好友列表
router.route('/list_friend.service')
	.get($.get);

module.exports = router;
