const { execfile } = require('child_process')
const { stderr } = require('process')


execfile('node',['exec.js,spawn.js'],(error,stdout,stderr)=>{
    if(error){
        console.log('Error '+error)
    }
    console.log('stdout '+stdout)

    if(stderr){
        console.log('stderr '+stderr)
    }
})