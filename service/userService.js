var User = require('../models/user');

module.exports = {
    // 注册
    //
    // 列出的属性必须填满 没有填写的话设成''
    createUser: function createUser(user, failure, success) {
        User.create({
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
        })
            .on('success', success)
            .on('failure', failure);
    },

    // 补全信息
    //
    // newValues是Object对象 需要在Controller层打包好直接传过来
    // 比如更新了phone信息和email信息
    // 传过来的newValues = { phone : '18801180000', email : 'foobar@126.com' }
    //
    // id是where查询条件 用户的ID 因为没有其他条件 所以写死了
    updateUser: function updateUser(newValues, id, failure, success) {
        User.update(newValues,
            {
                where: {
                    id: id
                }
            })
            .on('success', success)
            .on('failure', failure);
    },

    // 登录 获取信息 好友列表 检查用户名是否存在等
    //
    // need是需要获得的属性
    // 比如登录需要 id state和password
    // need = ['id','state','password']
    //
    // query是where查询条件
    // 比如检查用户名是否存在
    // query = { username : 'foobar' }
    findUser: function findUser(need, query, failure, success) {
        User.findOne({
            attribute: need,
            where: query
        })
            .on('success', success)
            .on('failure', failure);
    },
    
    authUser: function (name, password, failure, success) {
        User.findOne({
	        attribute: [
	        
	        ],
	        where: [
	        
	        ]
        })
    },
    
    test: function () {
	    return User.eFindAll()
    },

    // 同上 区别是查找多条记录 返回的是Array对象
    findUsers: function findUsers(need, query, failure, success) {
        User.findAll({
            attribute: need,
            where: query
        })
            .on('success', success)
            .on('failure', failure);
    }
};

