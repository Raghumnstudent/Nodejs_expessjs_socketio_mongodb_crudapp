//here the server loading data from json file 
//here we don't used json file, we used array

const express= require('express'); 
//server created 
const app= express(); 
//send data as response 
app.get('/',(req,res)=>{ res.json(["test",'hello','world']); }); 
//server started 
app.listen(3000,()=>{ console.log('App started on port number 3000'); });