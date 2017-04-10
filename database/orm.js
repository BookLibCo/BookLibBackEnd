/**
 * Created by zhy on 2017/4/8.
 */
var orm = require('orm');

module.exports.set = function (app) {
	app.use(orm.express('mysql://root:5898zHy1627@localhost：3306/Cooperator', {
		define: function (db, models, next) {
			next()
		}
	}));
};