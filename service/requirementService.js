var Requirement = require('../models/requirement');

module.exports = {
    createRequirement: function createRequirement(requirement) {
        return Requirement.create({
            user: requirement.user,
            title: requirement.title,
            tags: requirement.tags,
            content: requirement.content,
            state: requirement.state
        });
    },

    updateRequirement: function updateRequirement(requirement) {
        return Requirement.update({
                // 具体更新的属性再说
            },
            {
                where: {
                    // 限定的范围
                }
            });
    },

    findRequirement: function findRequirement(need, query) {
        return Requirement.findOne({
            attribute: need,
            where: query
        });
    },

    findRequirements: function findRequirements(need, query) {
        return Requirement.findAll({
            attribute: need,
            where: query
        });
    }
};