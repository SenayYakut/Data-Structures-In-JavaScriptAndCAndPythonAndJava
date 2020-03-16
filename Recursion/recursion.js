//recursive solution
function factorial(num){
    if(num === 1){
        return num;
    }else{
        return num * factorial(num-1);
    }
}
console.log(factorial(4));
//Call Stack:first in last out Think about Stack Data structure