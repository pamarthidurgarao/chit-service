const http = require('http');
const app = require('./app');
const { port } = require('./config');

const server = http.createServer(app);
var io = require('socket.io')(server);
require('./socket.js')(io)
global.io = io;

server.listen(port);