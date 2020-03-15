//compute all fibonacci numbers from 0 to n. What is the time complexity?
function allFib(n){
    for(let i=0; i<n; i++){
        console.log(i+":"+fib(i));
    }
}

function fib(n){
    if(n<2){
        return n;
    }
    return fib(n-1)+fib(n-2);
}

console.log(allFib(10));