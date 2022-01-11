
//throw error using Error class
//Error is built_in class of javascript
function check(age){
    if(age<18){
        try{
            throw new Error('age is not valid')
        }
        catch(error){
            console.log(error)
        }     
    }
    else{
        console.log('valid')
    }
}
check(17)

