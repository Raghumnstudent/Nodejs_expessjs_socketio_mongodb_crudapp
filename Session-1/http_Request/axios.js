// Axios is a Javascript library used to make HTTP requests from node. js or XMLHttpRequests from the browser and it supports the Promise API that is native to JS ES6. It can be used intercept HTTP requests and responses and enables client-side protection against XSRF. It also has the ability to cancel requests.

//if this code gives error when you run,you to need to install axios http library by following command
// npm i axios
//when you type above command it add axios library by adding nomodules, package.json and package-lock.json

const axios = require('axios');
axios.get("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
.then(res=>{
    console.log('This is giving the url '+res.data.url+'\n');
    console.log('Explanation in that url are '+res.data.explanation);
})
.catch(error=>{
    console.log("Error Occured"+ error)
})
