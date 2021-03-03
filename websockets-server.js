let WebSocket = require('ws');
let WebSocketServer = WebSocket.Server;
let port = 3001;

let ws = new WebSocketServer({
    port: port
});

console.log('websockets server started');

let messages = [];
ws.on('connection', function(socket) {
    console.log('client connection established');
    
    messages.forEach(function(msg) {
        socket.send(msg);
    })
    socket.on('message', function(data){
        console.log('message received: ' + data);
        messages.push(data);
        ws.clients.forEach(function(clientSocket){
            clientSocket.send(data);
        });
    });
});