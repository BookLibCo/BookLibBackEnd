/**
 * Created by zhy on 2017/5/4.
 */
exports.resolveRender = function (req, res, next) {
	res._render = res.render;
	
	res.render = function (view, options, fn) {
		// todo: customize global render info
		
		res._render(view, options, fn);
	};
	
	next();
};

exports.resolveSend = function (req, res, next) {
	res._send = res.send;
	
	res.send = function (body) {
		// todo: 公共数据
		let newBody = {
			rc: 0,
			status: true,
			data: body
		};
		
		res._send(JSON.stringify(newBody));
	};
	
	next();
};
