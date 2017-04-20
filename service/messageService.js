var Message = require('../models/message');

module.exports = {
    createMessage: function createMessage(message) {
        return Message.create({
            from: message.from,
            to: message.to,
            content: message.content,
            state: message.state
        });
    },

    updateMessage: function updateMessage(message) {
        return Message.update({
                // 具体更新的属性再说
            },
            {
                where: {
                    // 限定的范围
                }
            });
    }
};