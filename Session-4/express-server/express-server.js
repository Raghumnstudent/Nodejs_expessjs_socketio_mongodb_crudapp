//this is one simple server 
//this is writting Hello World to http://localhost:3050/
//writting to http://localhost:3050/login

const express= require('express'); 
const app = express();

app.get('/',(req,res)=>{ 
    res.send('Hello World'); }) 

app.get('/login',(req,res)=>{ 
    res.send('This is my login page'); }) 

app.listen(3050,()=>{
    console.log('App started on port number 3050'); })
