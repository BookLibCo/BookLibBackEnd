var db = require('../db/sequelize');

var Tag = db.sequelize.define('tag', {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        description: '自增 创建时无需赋值'
    },
    name: {
        type: db.Sequelize.STRING(10),
        notNull: true,
        description: '标签字段不同太长'
    }
}, {
    freezeTableName: true,
    timestamps: false
});

db.sequelize.sync().then(function(){
    console.log("Sync Success");
});

module.exports = Tag;

