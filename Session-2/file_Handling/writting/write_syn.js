//writing data syncronously

const fs  = require('fs')
fs.writeFileSync('Data.txt', 'I am writing data using syncronous method')
console.log('data written into data.txt file' )