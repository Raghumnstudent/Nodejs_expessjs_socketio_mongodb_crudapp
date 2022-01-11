const path = require('path')
const fs = require('fs');
const { resolve } = require('path/posix');


///using __dirname
console.log(path.join(__dirname,'testdir'))

var data = fs.readFileSync(path.join(__dirname,'./Data.txt'));
console.log(data.toString())


// require resolve
console.log(require.resolve('./Data.txt'))    //this give location 

data1 = fs.readFileSync(require.resolve('./Data.txt'))
console.log("using require resolve "+data1.toString())