/**
 * Created by zhy on 2017/5/4.
 */
exports.loginCheck = function (req, res, next) {
	if (req.session.uid) {
		// if already login
		next();
	} else {
		res.render('error', '您尚未登陆');
	}
};

exports.companyCheck = function (req, res, next) {
	// todo: 检查是否学生
	next();
};

exports.studentCheck = function (req, res, next) {
	// todo: 检查是否公司
	next();
};

exports.completeCheck = function (req, res, next) {
	// todo: 完整性校验，防止数据篡改
	
	next();
};
