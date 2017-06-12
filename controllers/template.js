/**
 * Created by zhy on 2017/6/9.
 */
const $  = require('../service/service');
const $e = require('../middleware/middleware').error;

exports.myInfo = function (req, res, next) {
	// todo: 调用service
	$.user.findUser(['tags'], {id: req.session.uid})
		.then((userInfo) => {
			// render页面
			res.render('myinformation', {
				myStates: 'Coming Soon',    		//fixme: 我的状态(数据库里没有?)
				visitNum: 'Coming Soon',    		//fixme: 访问数(数据库里没有?)
				perTag: userInfo.tags.split('&'),   //需求tag
				newReqIntro: ''             		//fixme: 新需求介绍(数据库里没有?)
			});
		})
		.catch((err) => {
			next($e.solveTemErr(err.stack));
		});
};

exports.requirement = function (req, res, next) {
	// todo: 调用service
	$.req.findRequirement(
		['ownerId', 'tags', 'ownerDesc', 'content'],
		{id: req.query.reqid}
	).then((reqm) => {
		$.user.findUserAll(reqm.ownerId)
			.then((user) => {
				res.render('tab-webview-subpage-about', {
					proTitle: reqm.title,   		//需求标题 ex:图片处理以及卷积神经网络研究
					PerIntro: user.introduction,  	//个人介绍
					reqtag: reqm.tags.split('&'),   //需求标签
					prodesc: reqm.content,    		//需求描述
					proReq: ''      				//fixme: 项目要求(与需求描述重复？)
				});
			})
			.catch((err) => {
				next($e.solveTemErr(err.stack));
			});
	}).catch((err) => {
		next($e.solveTemErr(err.stack));
	});
};

exports.chat = function (req, res, next) {
	// todo: 调用service
	$.friend.findFriendsInfo();
	
	res.render('tab-webview-subpage-chat', {
		FriendName: '',     //朋友名称
		FriendPosition: '', //朋友地位／职位
		FirendTel: ''       //朋友联系方式
	});
};

exports.contact = function (req, res, next) {
	// todo: 调用service
	
	res.render('tab-webview-subpage-contact', {
		myStates: 'Coming Soon',    //我的状态
		visitNum: 'Coming Soon',    //访问数
		perTag: ''                  //需求tag
	});
};

exports.reqInfo = function (req, res, next) {
	// todo: 调用service
	$.req.findRequirement({id: req.body.reqid}, '*')
		.then((reqm) => {
			$.user.findUser([], {id: reqm.ownerId})
				.then((userInfo) => {
					res.render('tab-webview-subpage-req_information', {
						proTitle: reqm.title,       	//需求标题 ex:图片处理以及卷积神经网络研究
						PerIntro: reqm.ownerDesc,       //个人介绍
						reqtag: reqm.tags.split('&'),   //需求标签
						prodesc: reqm.content,        	//需求描述
						proReq: '',         			//fixme: 项目要求(与需求描述重复？)
						relPerson: userInfo.username,   //项目发起人的实名
						PerPosition: '',    			//fixme: 职位(数据库似乎没有？)
						skill: '',         		 		//fixme: 技能(数据库似乎没有？)
						perTag: reqm.tags.split('&'),   //fixme: 需求tag(与需求标签重复？)
						fullReqDesc: ''     			//fixme: 需求的详细描述信息(与需求描述重复？)
					});
				})
				.catch((err) => {
					next($e.solveTemErr(err.stack));
				});
		})
		.catch((err) => {
			next($e.solveTemErr(err.stack));
		});
};
