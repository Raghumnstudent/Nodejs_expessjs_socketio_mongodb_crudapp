// Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. 
//It consists of: a Node.js server:


var express= require('express'); 
var app= express();
var http = require('http'); 
var server= http.Server(app);  //creating the server using http and express
var socket= require('socket.io'); 
var io= socket(server); //conecting the server to socket library
//to ad bidirectional and event based communication

server.listen(3000,()=>{
    console.log('Server Started')}); //listen is method to start server
app.get('/',(req,res)=>{ 
    res.sendFile(__dirname+'/index.html');})

//io.on method is used to detect how many client is connected using different browser
io.on('connection', (socket)=>{ console.log('client connected'); 

//sent message from server to client 
socket.emit('server message',{hello:'I am server,Hello client welcome'});

//receive message from client to server  
socket.on('client message',(data)=>{ console.log(data); })
})