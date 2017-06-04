var User = require('../models/user');
var Tag = require('../models/tag');

module.exports = {
    // 注册
    //
    // 列出的属性必须填满 没有填写的话设成''
    createUser: function createUser(user) {
        return User.eCreate({
            username: user.username,
            password: user.password,
            avatar: user.avatar,
            phone: user.phone,
            email: user.email,
            idcard: user.idcard,
            idcardfrontpic: user.idcardfrontpic,
            idcardbackpic: user.idcardbackpic,
            identity: user.identity,
            state: user.state,
            credit: user.credit,
            tags: user.tags,
            school: user.school,
            discipline: user.discipline,
            experience: user.experience,
            introduction: user.introduction
        });
    },

    // 补全信息
    //
    // newValues是Object对象 需要在Controller层打包好直接传过来
    // 比如更新了phone信息和email信息
    // 传过来的newValues = { phone : '18801180000', email : 'foobar@126.com' }
    //
    // id是where查询条件 用户的ID
    updateUser: function updateUser(newValues, id) {
        return User.eUpdate(newValues,
            {
                where: {
                    id: id
                }
            });
    },

    // 登录 获取信息等
    //
    // need是需要获得的属性
    // 比如登录需要 id state和password
    // need = ['id','state','password']
    //
    // query是where查询条件
    // 比如检查用户名是否存在
    // query = { username : 'foobar' }
    findUser: function findUser(need, query) {
        return User.eFindOne({
            attribute: need,
            where: query
        });
    },

    // 同上 区别是查找多条记录 返回的是Array对象
    findUsers: function findUsers(need, query) {
        return User.eFindAll({
            attribute: need,
            where: query
        });
    },

    // 检查用户名是否存在
    //
    // name 要输入的用户名
    // 返回true或false
    isUserExisted: function isUsernameExisted(name) {
        return User.eFindAll({
            attribute: ['username']
        }).then(function (result) {
            for (var i = 0; i < result.length; i++) {
                if (name == result[i].username) {
                    return false;
                }
            }
            return true;
        })
    },

    // 返回用户的标签
    //
    // id 用户的id
    // 返回Array对象 Object.name是标签的名字
    findTags: function findTags(id) {
        return User.eFindOne({
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
    // id 用户的id
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
                return User.eFindOne({
                    attribute: ['tags'],
                    where: {
                        id: id
                    }
                }).then(function (result3) {
                    var newTag = result3.tags + '&' + newId;
                    return User.eUpdate(
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

    // 认证用户 先留着吧
    authUser: function (name, password) {
        return User.eFindOne({
            attribute: [],
            where: {}
        });
    },
	
	findUserAll: function (id) {
		return User.eFindOne({
			where: {
				id: id
			}
		})
	}
};

