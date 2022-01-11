// writing data into file using asynchronous method 

const fs  = require('fs')
fs.writeFile('demo.txt','This is my test data',"utf-8",(err,fd)=>{
    if(err){
        console.log('Error')
    }
    console.log('Data write successfully')
})


