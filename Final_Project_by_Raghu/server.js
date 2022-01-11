// Socket.IO is a library that enables real-time, bidirectional and event-based communication between the browser and the server. 
//It consists of: a Node.js server:

// const connection = require('./model')
var express= require('express'); 
const bodyparser= require('body-parser');
var app= express();
const path= require('path');


var http = require('http'); 
var server= http.Server(app);  //creating the server using http and express
var socket= require('socket.io'); 
var io= socket(server); //conecting the server to socket library
//to ad bidirectional and event based communication

server.listen(3000,()=>{
    console.log('Server Started')}); //listen is method to start server
app.get('/',(req,res)=>{ 
    res.sendFile(__dirname+'/client.html');})

//io.on method is used to detect how many client is connected using different browser
io.on('connection',(socket)=>{ console.log('client connected'); 

socket.on('client name',(name)=>{
    socket.emit('server welcome message',{hello:`Hello ${name} welcome to Messanger App`});
})

socket.on('client message',(s)=>{
    fs.appendFileSync('data.txt',`${s}\n`)
    var d = fs.readFileSync('data.txt')
    socket.emit('Message',{data2:d.toString()})
    }) 
})



