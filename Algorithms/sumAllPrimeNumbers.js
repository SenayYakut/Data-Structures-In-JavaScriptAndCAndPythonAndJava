/*
Sum all the prime numbers up to and inluding the provided number.

A prime number is defined as a number greater than one and having only 2 divisors, one and itself. For example 2 is a prime number because it is only divisible by one and two.
HINTS:
push()
reduce()
*/
function sumAllPrimeNumbers(num){

function isPrime(num){
    for(let i=2; i<=num; i++){
        if(num%i===0 && num!==i){
            return false;
        }
    }
    return true; 
}
//this is our base case
if(num===1){
    return 0;
}
if(isPrime(num)===false){
    return sumAllPrimeNumbers(num-1);
}
if(isPrime(num)===true){
    return num + sumAllPrimeNumbers(num-1);
}
}

//test here
console.log(sumAllPrimeNumbers(122));//1593
console.log(sumAllPrimeNumbers(10));//17
console.log(sumAllPrimeNumbers(977));//73156
console.log(sumAllPrimeNumbers(5));//10





