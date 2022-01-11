//Reading the file data using asynchrnous method
//Here we are using callback function 
//Syntax --> fs.readFile('filename',callback Function)

const fs = require('fs')

fs.readFile('demo.txt',(err,data)=>{
    if(err){
        console.log('Error Occured')
    }
    console.log(data.toString())
    console.log('File read completed')}
)
