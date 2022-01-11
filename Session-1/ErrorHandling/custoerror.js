//custom error menans creating a new or our own error using Built_in Error class

//bellow is our customized error
class NotValidAge extends Error
{
    constructor(arg)
    {
        super(arg);
    }
}

//throw error using custom Error class
function check(age)
{
    if(age<18) 
        try{
            throw new NotValidAge('You can not vote..!!');
        } 
        catch(err){
            console.log(err)
        }      
    else
       return "you are eligable for voting"
}

var a = check(17);
var b = check(34);
console.log(b)

