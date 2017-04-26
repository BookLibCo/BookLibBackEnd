/**
 * Created by zhy on 2017/4/20.
 */
module.exports = function (req, res) {
	this.user = require('./module/user')(req, res);
	this.request = require('./module/request')(req, res);
	this.friend = require('./module/friend')(req. res);
};