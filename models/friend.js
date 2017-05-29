var db = require('../db/sequelize');

var Friend = db.sequelize.define('friend', {
    id:{
        type:db.Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement: true,
        description: '自增 创建时无需赋值'
    },
    userId1:{
        type:db.Sequelize.INTEGER,
        description:'友人A的id 注意友人的身份是双向的 所以存入好友信息时 存入AB的同时也得存入BA 删除也得同时',
        allowNull: false
    },
    userId2:{
        type:db.Sequelize.INTEGER,
        description:'友人B的id',
        allowNull:false
    }
}, {
    freezeTableName: true,
    timestamps: false
});

db.sequelize.sync().then(function(){
    console.log("Sync Success");
});

module.exports = Friend;