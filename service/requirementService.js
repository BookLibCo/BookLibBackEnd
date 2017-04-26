var Requirement = require('../models/requirement');

module.exports = {
	createRequirement: function createRequirement(requirement, failure, success) {
		Requirement.create({
			user: requirement.user,
			title: requirement.title,
			tags: requirement.tags,
			content: requirement.content,
			state: requirement.state
		})
			.on('success', success)
			.on('failure', failure);
	},
	
	updateRequirement: function updateRequirement(requirement, failure, success) {
		Requirement.update({
				// 具体更新的属性再说
			},
			{
				where: {
					// 限定的范围
				}
			})
			.on('success', success)
			.on('failure', failure);
	},
	
	findRequirement: function findRequirement(need, query, failure, success) {
		Requirement.findOne({
			attribute: need,
			where: query
		})
			.on('success', success)
			.on('failure', failure);
	},
	
	findRequirements: function findRequirements(need, query, failure, success) {
		Requirement.findAll({
			attribute: need,
			where: query
		})
			.on('success', success)
			.on('failure', failure);
	}
};