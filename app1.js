const { Socket } = require('dgram');
const http = require('http');

//creating a http server
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.write('hello');
        res.end();
    }
});

//this is low level code in low level, instead we do:
// server.on('connection', (socket)=>{
// console.log("new connection....");
// });

server.listen(3000);

console.log('Listening on port 3000');

