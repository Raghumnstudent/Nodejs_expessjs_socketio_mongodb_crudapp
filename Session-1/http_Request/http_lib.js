const http = require('https')
http.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'),(resp)=>{
    let data ='';
    resp.on('data',(chunk)=>{
    data+=chunk
    console.log(data)
})
resp.on('end',()=>{
    console.log(JSON.parse(data).explanation)
}).on("error",(err)=>{
    console.log("Error Occured",err)
})
}