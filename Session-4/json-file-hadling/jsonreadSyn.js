const fs =  require('fs')

fs.readFile('user.json',(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log(JSON.parse(data))
    }
})


const data = fs.readFileSync('user.json')
console.log(JSON.parse(data))