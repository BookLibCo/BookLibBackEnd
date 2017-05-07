/**
 * Created by zhy on 16/7/13.
 */
exports.stringFormat = function () {
	String.prototype.format = function (args) {
		if (arguments.length > 0) {
			var result = this;
			if (arguments.length == 1 && typeof (args) == "object") {
				for (var key in args) {
					var reg = new RegExp("({" + key + "})", "g");
					result = result.replace(reg, args[key]);
				}
			}
			else {
				for (var i = 0; i < arguments.length; i++) {
					if (arguments[i] == undefined) {
						return "";
					}
					else {
						var reg = new RegExp("({[" + i + "]})", "g");
						result = result.replace(reg, arguments[i]);
					}
				}
			}
			return result;
		}
		else {
			return this;
		}
	}
};

exports.reqParams = function (req, res, next) {
	if (req.body && req.body.length !== 0) {
		req.params = req.body
	}
	
	next();
};

exports.refreshSession = function (req, res, next) {
	req.session._garbage = new Date();
	req.session.touch();
	next();
};

exports.extendModel = function (req, res, next) {
	function errorHandler(results, res) {
		if (typeof(results) === 'Error') {
			// todo: 全局数据库操作错误处理
			res.sendErrorWithoutStatus('database error');
		}
		
		return results;
	}
	
	var model = require('sequelize/lib/model');
	
	model.prototype.eFindAll = function (options) {
		return this.findAll(options)
			.then(function (results) {
				return errorHandler(results, res);
			});
	};
	
	model.prototype.eFindOne = function (options) {
		return this.findOne(options)
			.then(function (results) {
				return errorHandler(results, res);
			});
	};
	
	model.prototype.eUpdate = function (values, options) {
		return this.update(values, options)
			.then(function (results) {
				return errorHandler(results, res);
			});
	};
	
	model.prototype.eCreate = function (values, options) {
		return this.create(values, options)
			.then(function (results) {
				return errorHandler(results, res);
			});
	};
	
	model.prototype.eDestroy = function (options) {
		return this.destroy(options)
			.then(function (results) {
				return errorHandler(results, res);
			});
	};
	
	next();
};