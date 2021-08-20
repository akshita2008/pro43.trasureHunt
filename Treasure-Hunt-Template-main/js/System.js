class System{
    constructor(){

    }
    authenticate(actualCode,enteredCode){
        console.log(actualCode+","+enteredCode);
        fill("black");
        if(actualCode===enteredCode)
        return true
        else 
        return false
        }
    
}
