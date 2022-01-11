const fs = require('fs')
//creatin the folder using fs module

// const dirName = 'raghu'
const dirName = 'testdir' //create testdir folder if it not exixt

try{
    if(!fs.existsSync(dirName)){
        fs.mkdirSync(dirName)
    }
    else{
        throw new Error('Directory already exixt')
    }
}
catch(err){
    console.log('Error '+ err)
}


