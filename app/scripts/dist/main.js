(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
let socket = require('./ws-client');

class ChatApp {
    constructor() {
        //console.log('Hello ES6!');
        socket.init('ws://localhost:3001');
        
        socket.registerOpenHandler(() => {
            let message = new ChatMessage({message: 'pow!'});
            socket.sendMessage(message.serialize());
        });
        
        socket.registerMessageHandler((data) => {
            console.log(data);
        });
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
},{"./ws-client":3}],2:[function(require,module,exports){
let ChatApp = require('./app');
//import ChatApp from './app';
new ChatApp();
},{"./app":1}],3:[function(require,module,exports){

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

},{}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJhcHAvc2NyaXB0cy9zcmMvYXBwLmpzIiwiYXBwL3NjcmlwdHMvc3JjL21haW4uanMiLCJhcHAvc2NyaXB0cy9zcmMvd3MtY2xpZW50LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImxldCBzb2NrZXQgPSByZXF1aXJlKCcuL3dzLWNsaWVudCcpO1xuXG5jbGFzcyBDaGF0QXBwIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnSGVsbG8gRVM2IScpO1xuICAgICAgICBzb2NrZXQuaW5pdCgnd3M6Ly9sb2NhbGhvc3Q6MzAwMScpO1xuICAgICAgICBcbiAgICAgICAgc29ja2V0LnJlZ2lzdGVyT3BlbkhhbmRsZXIoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IG1lc3NhZ2UgPSBuZXcgQ2hhdE1lc3NhZ2Uoe21lc3NhZ2U6ICdwb3chJ30pO1xuICAgICAgICAgICAgc29ja2V0LnNlbmRNZXNzYWdlKG1lc3NhZ2Uuc2VyaWFsaXplKCkpO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIHNvY2tldC5yZWdpc3Rlck1lc3NhZ2VIYW5kbGVyKChkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5jbGFzcyBDaGF0TWVzc2FnZSB7XG4gICAgY29uc3RydWN0b3Ioe1xuICAgICAgICBtZXNzYWdlOiBtLFxuICAgICAgICB1c2VyOiB1ID0gJ2JhdG1hbicsXG4gICAgICAgIHRpbWVzdGFtcDogdCA9IChuZXcgRGF0ZSgpLmdldFRpbWUoKSlcbiAgICB9KSB7XG4gICAgICAgIHRoaXMubWVzc2FnZSA9IG07XG4gICAgICAgIHRoaXMudXNlciA9IHU7XG4gICAgICAgIHRoaXMudGltZXN0YW1wID0gdDtcbiAgICB9XG4gICAgc2VyaWFsaXplKCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXNlcjogdGhpcy51c2VyLFxuICAgICAgICAgICAgbWVzc2FnZTogdGhpcy5tZXNzYWdlLFxuICAgICAgICAgICAgdGltZXN0YW1wOiB0aGlzLnRpbWVzdGFtcFxuICAgICAgICB9O1xuICAgIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBDaGF0QXBwO1xuXG4vL2V4cG9ydCBkZWZhdWx0IENoYXRBcHA7IiwibGV0IENoYXRBcHAgPSByZXF1aXJlKCcuL2FwcCcpO1xuLy9pbXBvcnQgQ2hhdEFwcCBmcm9tICcuL2FwcCc7XG5uZXcgQ2hhdEFwcCgpOyIsIlxuY2xhc3MgU29ja2V0IHtcbiAgICBcbiAgICBpbml0KHVybCkge1xuICAgIHNvY2tldCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICBjb25zb2xlLmxvZygnY29ubmVjdGluZy4uLicpO1xuICAgIH1cblxuICAgIHJlZ2lzdGVyT3BlbkhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XG4gICAgICAgIHNvY2tldC5vbm9wZW4gPSAoKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnb3BlbicpO1xuICAgICAgICAgICAgaGFuZGxlckZ1bmN0aW9uKCk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXIoaGFuZGxlckZ1bmN0aW9uKSB7XG4gICAgICAgIHNvY2tldC5vbm1lc3NhZ2UgPSAoZSkgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ21lc3NhZ2UnLCBlLmRhdGEpO1xuICAgICAgICAgICAgbGV0IGRhdGEgPSBKU09OLnBhcnNlKGUuZGF0YSk7XG4gICAgICAgICAgICBoYW5kbGVyRnVuY3Rpb24oZGF0YSk7XG4gICAgICAgIH07XG4gICAgfVxuICAgIFxuICAgIHNlbmRNZXNzYWdlKHBheWxvYWQpIHtcbiAgICAgICAgc29ja2V0LnNlbmQoSlNPTi5zdHJpbmdpZnkocGF5bG9hZCkpO1xuICAgIH1cbn1cblxubGV0IHNvY2tldCA9IG5ldyBTb2NrZXQoKTtcbm1vZHVsZS5leHBvcnRzID0gc29ja2V0O1xuLyptb2R1bGUuZXhwb3J0cyA9IHJlZ2lzdGVyT3BlbkhhbmRsZXI7XG5tb2R1bGUuZXhwb3J0cyA9IHJlZ2lzdGVyTWVzc2FnZUhhbmRsZXI7XG5tb2R1bGUuZXhwb3J0cyA9IHNlbmRNZXNzYWdlOyovXG4iXX0=
