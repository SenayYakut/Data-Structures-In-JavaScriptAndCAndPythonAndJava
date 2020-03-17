//Compute Nth Fibonacci number in JavaScript

let fib=(num)=>{
    return num<2 ? num:fib(num-1)+fib(num-2);
}
console.log(fib(9));

//compute the fibonacci number position
//if we use recursion here, it gives us a very bad time complexity
//exponontial which is very bad. O(2^n)
function fibonacci(position){
    if(position <3){
      return position;
    }
    else{
      return fibonacci(position-1)+fibonacci(position-2);
    }
  }
  
  console.log(fibonacci(30));