//Write a recursive function collatz(n), that calculates how many steps it takes to get 1 if you start from n and recurse as indicated.

function collatz(n){
    //base case
    if(n === 1){
        return 0;
    }
    //even numbers
    else if((n % 2) === 0){
        return 1 + collatz(n/2);
    //odd numbers
    }else { 
        return 1 + collatz((3 * n)+1);
        
    }
}
console.log(collatz(1));//0
console.log(collatz(2));//1
console.log(collatz(3));//7
console.log(collatz(4));//2
console.log(collatz(5));//5
console.log(collatz(6));//8
console.log(collatz(7));//16
console.log(collatz(8));//3
console.log(collatz(15));//17
console.log(collatz(27));//111
console.log(collatz(50));//24

