var db = require('../db/sequelize');

var Tag = db.sequelize.define('tag', {
    id: {
        type: db.Sequelize.INTEGER,
        description: '标签数量小于100吧',
        primaryKey: true,
        autoIncrement: true,
        description: '自增 创建时无需赋值'
    },
    name: {
        type: db.Sequelize.STRING(10),
        description: '标签字段不同太长'
    }
}, {
    freezeTableName: true
});

module.exports = Tag;

