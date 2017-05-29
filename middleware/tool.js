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

exports.refreshSession = function (req, res, next) {
	req.session._garbage = new Date();
	req.session.touch();
	next();
};

exports.extendModel = function (req, res, next) {
	function errorHandler(results, res) {
		// todo: 全局数据库操作错误处理
		res.sendErrorWithoutStatus(results.message);
	}
	
	var model = require('sequelize/lib/model');
	
	model.prototype.eFindAll = function (options) {
		return this.findAll(options)
			.catch(function (results) {
				errorHandler(results, res);
			});
	};
	
	model.prototype.eFindOne = function (options) {
		return this.findOne(options)
			.catch(function (results) {
				return errorHandler(results, res);
			});
	};
	
	model.prototype.eUpdate = function (values, options) {
		return this.update(values, options)
			.catch(function (results) {
				errorHandler(results, res);
			});
	};
	
	model.prototype.eCreate = function (values, options) {
		return this.create(values, options)
			.catch(function (results) {
				errorHandler(results, res);
			});
	};
	
	model.prototype.eDestroy = function (options) {
		return this.destroy(options)
			.catch(function (results) {
				errorHandler(results, res);
			});
	};
	
	next();
};