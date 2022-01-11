const {spawn} = require('child_process')

const child = spawn('dir',['C:\Users\nraghu\OneDrive - ZeOmega\Web_development_files\Phase_3'],{shell:true})

child.stdout.on('data',(data)=>{
    console.log('Standard output '+data)
})

child.stdout.on('error',(data)=>{
    console.log('Standard Error '+data)
})

child.on('close',(code)=>{
    console.log(`child Process exited with code ${code}`)
})

