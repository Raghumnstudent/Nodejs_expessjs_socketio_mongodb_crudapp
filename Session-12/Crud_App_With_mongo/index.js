const connection= require('./models');
const express= require('express');
const bodyparser= require('body-parser');
const application= express();

const path= require('path');

const PeopleController= require('./controllers/people');

application.use(bodyparser.urlencoded({extended:true}))
application.get("/",(req,res)=>{
    res.render("<h1>Welcome to Simplilearn</h1>");
})

application.use("/people",PeopleController);
application.use(bodyparser.json())
application.use(bodyparser.urlencoded({extended:true}))
application.listen('3600',()=>{
    console.log('server started');
})