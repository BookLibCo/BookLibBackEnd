var Requirement = require('../models/requirement');
var Tag = require('../models/tag');

module.exports = {
    // 发布需求
    //
    // 列出的属性必须填满 没有填写的话设成''
    createRequirement: function createRequirement(requirement) {
	    return Requirement.create({
        // return Requirement.eCreate({
            ownerId: requirement.ownerId,
            ownerDesc: requirement.ownerDesc,
            avatar: requirement.avatar,
            title: requirement.title,
            tag: requirement.tag,
            content: requirement.content,
            city: requirement.city,
            type: requirement.type,
            discipline: requirement.discipline,
            acceptorId: requirement.acceptorId,
            state: requirement.state
        });
    },

    // 更新需求 接受需求 解雇承包人
    //
    // newValues是Object对象 需要在Controller层打包好直接传过来
    // 比如更新了content信息和acceptorId信息
    // 传过来的newValues = { content : 'new content', acceptorId : 123 }
    //
    // id是where查询条件 需求的ID 因为没有其他条件 所以写死了
    updateRequirement: function updateRequirement(newValues, id) {
        return Requirement.eUpdate(newValues, {
                where: {
                    id: id
                }
            });
    },

    // 查找单个需求
    findRequirement: function findRequirement(need, query) {
        return Requirement.eFindOne({
            attribute: need,
            where: query
        });
    },

    // 查找多个需求
    findRequirements: function findRequirements(need, query) {
        return Requirement.eFindAll({
            attribute: need,
            where: query
        });
    },

    // 根据城市查找
    // city 城市的名字
    // 返回需求列表
    findByCity: function findByCity(city) {
        return Requirement.eFindAll({
            where: {
                city: city
            }
        })
    },

    // 根据项目类别查找
    // type 项目类别
    // 返回需求列表
    findByType: function findByType(type) {
        return Requirement.eFindAll({
            where:{
                type: type
            }
        })
    },

    // 根据专业查找
    // type 专业
    // 返回需求列表
    findByDiscipline: function findByDiscipline(discipline) {
        return Requirement.eFindAll({
            where:{
                discipline: discipline
            }
        })
    },

    // 返回需求的标签
    //
    // id 需求的id
    // 返回Array对象 Object.name是标签的名字
    findTags: function findTags(id) {
        return Requirement.eFindOne({
            attribute: ['tags'],
            where: {
                id: id
            }
        }).then(function (result) {
            var tags = result.split('&');
            if (tags.length < 1)
                return null;
            return Tag.eFindAll({
                attribute: ['name'],
                where: {
                    id: {$in: tags}
                }
            });
        });
    },


    // 添加Tag
    //
    // id   需求的id
    // tag 要新加的标签
    // 标签已存在或其他错误 返回false
    addTag: function addTag(id, tag) {
        return Tag.eFindAll({
            attribute: ['name']
        }).then(function (result) {
            for (var i = 0; i < result.length; i++) {
                if (tag == result[i].name) {
                    return false;
                }
            }
            return Tag.eCreate({
                name: tag
            }).then(function (result2) {
                var newId = result2.id;
                return Requirement.eFindOne({
                    attribute: ['tags'],
                    where: {
                        id: id
                    }
                }).then(function (result3) {
                    var newTag = result3.tags + '&' + newId;
                    return Requirement.eUpdate(
                        {
                            tags: newTag
                        },
                        {
                            where: {
                                id: id
                            }
                        }
                    );
                })
            })
        })
    },
};
