//Reading the properties of file using stat method in fs module

const fs= require('fs');
fs.stat('Data.txt',(err,stat)=>{
    if(err)
    {
        console.log('Error '+err)
    }
    console.log(stat);
    console.log('Is File? '+stat.isFile());
    console.log('Directory? '+stat.isDirectory());
    console.log('is Symbolic Link? '+stat.isSymbolicLink());
    console.log("File Size: "+stat.size)
})