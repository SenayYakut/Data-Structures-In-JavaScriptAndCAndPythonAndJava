/*
Given a positive integer num, return the sum of the all odd fibonacci numbers that less than or equal to the num.
The first 2 numbers in the Fibonacci sequence are 1 and 1. Every additional number in the sequence is the sum of the two previous numbers. The first 6 numbers of the Fibonacci sequence 1,1,3,5 and 8.

*/

function sumOddFibonacciNumbers(num){
    let current=1;
    let prev=0;
    let result=0;

    while(current <= num){
        if(current%2!==0){
            result+=current;
        }
        let nextCurrent=current+prev;
        prev=current;
        current=nextCurrent;
    }
    return result;
}

console.log(sumOddFibonacciNumbers(19))//10
console.log(sumOddFibonacciNumbers(1000))//1785
console.log(sumOddFibonacciNumbers(4000000))//4613732
console.log(sumOddFibonacciNumbers(22))//44


