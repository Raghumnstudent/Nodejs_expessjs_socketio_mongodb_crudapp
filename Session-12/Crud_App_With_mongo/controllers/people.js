const express= require('express');
const mongoose = require('mongoose');

const router= express.Router();

const PeopleModel = mongoose.model("People");

router.get("/",(req,res)=>{

});

router.get("/list",(req,res)=>{
    PeopleModel.find((err,docs)=>{
        if(!err)
        {
            console.log(docs);
            res.status(200).send(docs);
        }
    });
});

router.post("/add",(req,res)=>{
    console.log(req.body)
    var people = new PeopleModel();
    people.fname= "Naga";
    people.salary= 45678;
    people.mno= 234567890;
    
    people.save((err,doc)=>{
        if(!err){
            console.log("Document Inserted "+doc)
            res.status(200).send(doc);
        }
        else
        {
            console.log("Error while inserting a doc "+err)
        }
    })
});

module.exports= router;