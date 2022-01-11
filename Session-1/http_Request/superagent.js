
//superagent is also one http request library, In this we can add query to get the specific data from url
//In bellow example we selected query as email:Sincer@april.biz
//it gives person details of that email
const superagent= require('superagent');

 superagent.get('https://jsonplaceholder.typicode.com/users') 
 .query({'email':'Sincere@april.biz'}) 
 .end((err,res)=>{ 
    if(err){ 
        return console.log(err);
    }
    console.log(res.body); })