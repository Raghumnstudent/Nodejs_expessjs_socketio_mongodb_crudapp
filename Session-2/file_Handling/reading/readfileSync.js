//Reading the file data using synchronous method

//In Synchronous method we don't use the callback function
//callback function gives error if file is not there or any other error
//But in synchronous we need to analyze where the error is occured

const fs = require('fs')

console.log("File reading")

const data = fs.readFileSync('demo.txt');

console.log(data.toString())

console.log('Reading completed')