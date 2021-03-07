
class Socket {
    
    init(url) {
    socket = new WebSocket(url);
    console.log('connecting...');
    }

    registerOpenHandler(handlerFunction) {
        socket.onopen = () => {
            console.log('open');
            handlerFunction();
        };
    }
    
    registerMessageHandler(handlerFunction) {
        socket.onmessage = (e) => {
            console.log('message', e.data);
            let data = JSON.parse(e.data);
            handlerFunction(data);
        };
    }
    
    sendMessage(payload) {
        socket.send(JSON.stringify(payload));
    }
}

let socket = new Socket();
module.exports = socket;
/*module.exports = registerOpenHandler;
module.exports = registerMessageHandler;
module.exports = sendMessage;*/
