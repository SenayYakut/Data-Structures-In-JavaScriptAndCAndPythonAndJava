//Compute Nth Fibonacci number in JavaScript

let fib=(num)=>{
    return num<2 ? num:fib(num-1)+fib(num-2);
}
console.log(fib(9));
