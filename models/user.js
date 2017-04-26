var db = require('../db/sequelize');

var User = db.sequelize.define('user', {
        id: {
            type: db.Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            description: '自增 创建时无需赋值'
        },
        username: {
            type: db.Sequelize.STRING(10),
            allowNull: false
        },
        password: {
            type: db.Sequelize.STRING(40),
            description: '数据库里存储sha1加密后的密码',
            allowNull: false
        },
        avatar: {
            type: db.Sequelize.STRING(40),
            description: '存储头像存储路径'
        },
        phone: {
            type: db.Sequelize.STRING(11)
        },
        email: {
            type: db.Sequelize.STRING(40)
        },
        idcard: {
            type: db.Sequelize.STRING(18),
            description: '用STRING 是因为有人最后一位是X'
        },
        idcardfrontpic: {
            type: db.Sequelize.STRING(40),
            description: '身份证正面照存储路径'
        },
        idcardbackpic: {
            type: db.Sequelize.STRING(40),
            description: '身份证背面照存储路径'
        },
        identity: {
            type: db.Sequelize.CHAR(1),
            description: '角色 未定0 学生1 老师2 公司3 多的另加',
            defaultValue: '0'
        },
        state: {
            type: db.Sequelize.CHAR(1),
            description: '状态 正常1 多的另加',
            defaultValue: '0'
        },
        credit: {
            type: db.Sequelize.INTEGER,
            description: '信用评分 致敬芝麻信用',
            defaultValue: 700
        },
        tags: {
            type: db.Sequelize.STRING(20),
            description: '标签 1&2&3的形式'
        },
        school: {
            type: db.Sequelize.STRING(20),
            description: '学生老师就school 员工就company'
        },
        discipline: {
            type: db.Sequelize.STRING(20),
            description: '学生就专业 员工就部门',
        },
        experience: {
            type: db.Sequelize.STRING(100),
            description: '工作经历 100字以内',
        },
        introduction: {
            type: db.Sequelize.STRING(100),
            description: '简介 100字以内'
        }
    },
    {
        freezeTableName: true
    });

db.sequelize.sync().then(function(){
    console.log("Sync Success");
});

module.exports = User;