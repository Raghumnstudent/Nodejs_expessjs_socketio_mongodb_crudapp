const fs = require('fs')

//asynchronously
// fs.appendFile('append.txt','\nHello Raghu',(err,fd)=>{
//     if(err){
//         console.log(err)
//     }
//     console.log('Data append successfully')
// })

//synchronously
const data = fs.appendFileSync('syndata.txt','\nHello Master')
console.log('Data appended using synchronous method')
