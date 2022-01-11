const { ChildProcess } = require('child_process')
const cluster = require('cluster')
const http = require('http')
const os = require('os')


const noOfcpus = os.cpus().length
console.log('by default it take 4 cpus '+ noOfcpus)

if(cluster.isMaster){
    masterProcess();
}
else{
    ChildProcess();
}

function masterProcess(){
    console.log('Master '+process.pid+" is running")
    for(let i=0;i<noOfcpus;i++){
        console.log('Forking Process'+i)
        cluster.fork()
    }
    process.exit()
}

function childProcess(){
    console.log('work started '+process.pid+'fitched')
    process.exit()
}
