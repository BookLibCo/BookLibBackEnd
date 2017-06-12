/**
 * Created by zhy on 2017/5/4.
 */
exports.customize = function (req, res, next) {
	// res.render404 = function (error) {
	// 	return res.status(404).render('error', { error: error });
	// };
	//
	// res.renderError = function (error, statusCode) {
	// 	statusCode = statusCode !== undefined ? 400 : statusCode;
	// 	return res.status(statusCode).render('error', { error: error });
	// };
	//
	// res.sendErrorWithoutStatus = function (error) {
	// 	return res.send({ error: error })
	// };
	//
	// res.send404 = function (error) {
	// 	return res.status(404).send(error);
	// };
	//
	
	res._render = res.render;
	
	res.render = function (view, options, fn) {
		// todo: customize global render info
		
		res._render(view, options, fn);
	};
	
	res.renderError = function (errInfo) {
		res.render('error', {
			error: errInfo
		});
	};
	
	res.sendError = function (msg) {
		// statusCode = statusCode !== undefined ? 400 : statusCode;
		// return res.status(statusCode).send(JSON.stringify(error));
		
		return res.send(JSON.stringify({
			msg: msg,
			status: false,
			rc: -1
		}));
	};
	
	res.sendSuccess = function (msg, data) {
		return res.send(JSON.stringify({
			msg: msg,
			rc: 0,
			status: true,
			// data: JSON.stringify(data)
			data: data
		}));
	};
	
	next();
};
