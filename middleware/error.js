/**
 * Created by zhy on 2017/5/4.
 */
exports.error = function (req, res, next) {
	res.render404 = function (error) {
		return res.status(404).render('error', { error: error });
	};
	
	res.renderError = function (error, statusCode) {
		statusCode = statusCode !== undefined ? 400 : statusCode;
		return res.status(statusCode).render('error', { error: error });
	};
	
	res.sendErrorWithoutStatus = function (error) {
		return res.send({ error: error })
	};
	
	res.send404 = function (error) {
		return res.status(404).render(error);
	};
	
	res.sendError = function (error, statusCode) {
		statusCode = statusCode !== undefined ? 400 : statusCode;
		return res.status(statusCode).render(error);
	};
	
	next();
};
