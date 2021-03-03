let WebSocket = require('ws');
let WebSocketServer = WebSocket.Server;
let port = 3001;
let ws = new WebSocketServer({
    port: port
});

console.log('websockets server started');

ws.on('connection', function(socket) {
    console.log('client connection established');
    
    socket.on('message', function(data){
        console.log('message received: ' + data);
        socket.send(data);
    });
});