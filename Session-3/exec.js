const {exec} = require('child_process');
const { stderr } = require('process');

//use ls intstead of dir in linux or max os
exec('dir',(error,stdout,stderr)=>{
    if(error){
        console.log(`Error ${error}`)
    }
    console.log(`standard output ${stdout}`)
    if(stderr){
        console.log('stderr '+stderr)
    }
})
