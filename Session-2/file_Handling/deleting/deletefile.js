const fs = require('fs')
// Deleting the file using asynchronous method

// fs.unlink('sample1.txt',function(err){
//     if(err){
//         console.log(err)
//     }
//     console.log('file deleted')
// })

//using synchronous method
fs.unlinkSync('sample2.txt')
console.log('File deleted synchronous method')