//There is one website called weather, this gives weather details of cities


//First go and create account in that website
//generate key and you that key as bellow

let request = require('request')
let key = "86913a6f2fb3e0887589ad0abbef919a";  //generate in weather website
const cities = ['Bangalore', 'Mubai', 'Mandya', "mysore"]
const city = cities[Math.floor(Math.random()*cities.length)] //randomly selecting index using math.random method
// let url = 'api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}'
let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${key}`;
request(url,function(err,response,body){
    console.log('Fetching');

    if(err){
        console.log('There is error')
    }
    else{
        let weather = JSON.parse(body)
        let message = `it's ${weather.main.temp} degree in ${weather.name}`
        console.log(message)
    }
    greet()
})

function greet(){
    console.log('weather fetched.......!')
}