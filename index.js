const express = require("express");
const socket = require("socket.io");
const app = express();
//
// app.get('/', function (req, res) {
//     res.send('hello world')
// });

const server = app.listen(4001, function ()
{
    console.log("listening to requests at port 4001")
});

//Static files
app.use(express.static("public"));



//Socket setup
let io = socket(server);
io.on('connection', function(socket){
    console.log("connection");
    socket.on('chat_message', function(msg){
        console.log(msg);
    });
    socket.emit('event', { hello: 'world' });
});
