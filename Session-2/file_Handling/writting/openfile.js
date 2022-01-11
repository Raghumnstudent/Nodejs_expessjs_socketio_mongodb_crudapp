const fs = require('fs')

fs.open('demo.txt','w',(err, fd)=>{
    if(err){
        console.log('Error '+ err)
    }
    // fs.writeFile('Raghu')
    fs.writeFileSync('demo.txt','Raghu')  //writing to data to file
    console.log('file opened')
    console.log(fd)

})

fs.close((err,fd)=>{
    if(err){
        console.log(err)
        
    }
    console.log('file closed')
    console.log(fd)
})