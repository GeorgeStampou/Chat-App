const {formatTime} = require('./time');

const createMessage = (user, msg) => {
    return { username: user, content: msg, time: formatTime() };
}

module.exports = {createMessage};