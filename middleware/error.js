/**
 * Created by zhy on 2017/5/29.
 */
exports.solveCusErr = function (err, msg) {
	err._message = err.message;
	err.message  = msg + ', error: ' + err._message;
	err.type     = 'custom';
	return err;
};

exports.solveTemErr = function (err) {
	err.type = 'template';
	return err;
};

exports.customizeErr = function (err, req, res, next) {
	switch (err.type) {
		case 'custom':
			// todo: 处理自定义错误
			res.sendError(err.message);
			break;
		
		case 'template':
			// todo: 处理模版错误
			res.renderError(err.stack);
			break;
		
		default:
			break;
	}
	
	next(err);
};
