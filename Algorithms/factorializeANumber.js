/*
Return the factorial of the provided integer.
If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.
*/

function factorializeANumber(n){
    if(n===1 || n===0){
        return 1;
    }
    return n * factorializeANumber(n-1);
}
console.log(factorializeANumber(3));//6
console.log(factorializeANumber(4));//24
console.log(factorializeANumber(6));//720