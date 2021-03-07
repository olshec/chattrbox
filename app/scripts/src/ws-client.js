function socket(url) {
    socket = new WebSocket(url);
    console.log('connecting...');
}

module.exports = socket;
