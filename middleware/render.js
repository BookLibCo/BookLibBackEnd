/**
 * Created by zhy on 2017/5/4.
 */
exports.resolveRender = function (req, res, next) {
	req._render = res;
	
	req.res = function (view, options, fn) {
		// todo: customize global render info
		
		res._render(view, options, fn);
	};
	
	next();
};