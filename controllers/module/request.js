/**
 * Created by zhy on 2017/4/20.
 */
var $ = require('../../service/requirementService');

module.exports = function (req, res) {
	function error(err) {
		res.send(err);
	}
	
	this.add = function () {
		$.createRequirement({
			user: req.params.user_id,
			title: req.params.title,
			tags: req.params.tags,
			content: req.params.content,
			state: req.params.state
		}, error, function () {
			
		})
	};
	
	this.list = function () {
		
	};
	
	this.one = function () {
		
	};
	
	this.update = function () {
		
	};
	
	this.delete = function () {
		
	};
	
	this.fire = function () {
		
	};
	
	this.accept = function () {
		
	};
	
	this.judge = function () {
		
	};
	
};
