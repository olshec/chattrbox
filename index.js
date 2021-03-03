let http = require("http");

let server = http.createServer(function(req,res){
    console.log('Responding to a request.');
    res.end('<h1>Hello, World!</h1>');
});
server.listen(3000);