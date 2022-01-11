//here loading the jade template(jade template like html file writing without using tags ) into website http://localhost:4100/
var express= require('express');
var app  = express();
app.set('view engine','jade') 
app.get('/',(req,res)=>{ res.render('sample'); }) 
app.listen(4100,()=>{ 
    console.log('server is running on port number 4100') })