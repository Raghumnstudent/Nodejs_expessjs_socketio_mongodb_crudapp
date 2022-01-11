process.on('message',(m)=>{
    console.log('child:message from parent:',m.hello)
})

process.send({hello:'from child process'})