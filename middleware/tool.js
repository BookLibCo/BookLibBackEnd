/**
 * Created by zhy on 16/7/13.
 */
exports.stringFormat = function (req, res, next) {
	String.prototype.format = function (args) {
		if (arguments.length > 0) {
			let result = this;
			
			if (arguments.length === 1 && typeof (args) === "object") {
				for (let key in args) {
					let reg = new RegExp("({" + key + "})", "g");
					result  = result.replace(reg, args[key]);
				}
			} else {
				for (let i = 0; i < arguments.length; i++) {
					if (arguments[i] === undefined) {
						return "";
					} else {
						let reg = new RegExp("({[" + i + "]})", "g");
						result  = result.replace(reg, arguments[i]);
					}
				}
			}
			
			return result;
		} else {
			return this;
		}
	};
	
	next();
};
