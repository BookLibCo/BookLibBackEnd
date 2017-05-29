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
		return res.status(404).send(error);
	};
	
	res.sendError = function (error, statusCode) {
		statusCode = statusCode !== undefined ? 400 : statusCode;
		return res.status(statusCode).send(JSON.stringify(error));
	};
	
	next();
};

exports.serverError = function (err, req, res, next) {
	// set locals, only providing error in development
	// res.locals.message = err.message;
	// res.locals.error = req.app.get('env') === 'development' ? err : {};
	
	// todo: 错误处理
	
	// render the error page
	res.status(err.status || 500);
	
	if (err.status === 404) {
		res.render('error');
	} else {
		if (err.name === 'SequelizeValidationError') {
			return res.sendError({
				msg: err,
				status: false,
				rc: -1,
				data: null
			}, 500)
		}
		
		res.sendError(err, 500);
	}
	
	next();
};
