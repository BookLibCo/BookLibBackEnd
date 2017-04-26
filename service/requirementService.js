var Requirement = require('../models/requirement');

module.exports = {
    // 发布需求
    //
    // 列出的属性必须填满 没有填写的话设成''
    createRequirement: function createRequirement(requirement, failure, success) {
        Requirement.create({
            ownerId: requirement.ownerId,
            ownerDesc: requirement.ownerDesc,
            avatar: requirement.avatar,
            title: requirement.title,
            tag: requirement.tag,
            content: requirement.content,
            acceptorId: requirement.acceptorId,
            state: requirement.state
        })
            .on('success', success)
            .on('failure', failure);
    },

    // 更新需求 接受需求 解雇承包人
    //
    // newValues是Object对象 需要在Controller层打包好直接传过来
    // 比如更新了content信息和acceptorId信息
    // 传过来的newValues = { content : 'new content', acceptorId : 123 }
    //
    // id是where查询条件 需求的ID 因为没有其他条件 所以写死了
    updateRequirement: function updateRequirement(newValues, id, failure, success) {
        Requirement.update(newValues,
            {
                where: {
                    id:id
                }
            })
            .on('success', success)
            .on('failure', failure);
    },

    // 查找单个需求
    findRequirement: function findRequirement(need, query, failure, success) {
        Requirement.findOne({
            attribute: need,
            where: query
        })
            .on('success', success)
            .on('failure', failure);
    },

    // 查找多个需求
    findRequirements: function findRequirements(need, query, failure, success) {
        Requirement.findAll({
            attribute: need,
            where: query
        })
            .on('success', success)
            .on('failure', failure);
    }
};