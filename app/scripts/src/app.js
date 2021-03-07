let socket = require('./ws-client');

class ChatApp {
    constructor() {
        //console.log('Hello ES6!');
        socket('ws://localhost:3001');
    }
}

class ChatMessage {
    constructor({
        message: m,
        user: u = 'batman',
        timestamp: t = (new Date().getTime())
    }) {
        this.message = m;
        this.user = u;
        this.timestamp = t;
    }
    serialize() {
        return {
            user: this.user,
            message: this.message,
            timestamp: this.timestamp
        };
    }
}

module.exports = ChatApp;

//export default ChatApp;