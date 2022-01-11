// Asynchronous functinality demo
//Asynchronous means it don't wait for other function or other activity it execute all functiond at a time
//complete the function according to setTime 


//setTimeout is used to set the delay
//syntax ---> setTimeout(function_name or function,delayvalue in milisecond)
//After delay it call the function

// function test1(){
//     console.log('Function 1 started');
//     setTimeout(()=>{
//         console.log('Function 1 completed')
//     },2000)
// }


// function test2(){
//     console.log('Function 2 started');
//     setTimeout(()=>{
//         console.log('Function 2 completed')
//     },1000)
// }

// function test3(){
//     console.log('Function 3 started');
//     setTimeout(()=>{
//         console.log('Function 3 completed')
//     },1500)
// }

// function test4(){
//     console.log('Function 4 started');
//     setTimeout(()=>{
//         console.log('Function 4 completed')
//     },2500)   
// }


// test1()
// test2()
// test3()
// test4()


// within one second, for loop passed all values, that's why it printing 10 mam
// function asyn(){
//     for(var count=0; count<10;count++){
//         setTimeout(function(){ //this will execute after 1000ms , within this time for loop passes all values 
//             console.log(count);
//         },1000)
//     }
// }
// asyn()


// call queue  ---> calling the functions in its own orderwise within a other function 

const raju = ()=>console.log('Raju')
const raghu = ()=>console.log('Raghu')

const ravi = ()=>{
    console.log('Ravi')
    setTimeout(raghu,1000)
    setTimeout(raju,1000)
}
ravi()

