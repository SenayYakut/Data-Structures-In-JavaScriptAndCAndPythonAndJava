let memo=[0,1];
function allFibonacci(n){
    let result=memo[i];
    for(var i=0; i<n; i++){
        result+=console.log(i+":"+fib(i));
    }
    return result;
}

function fib(n){
    if(n<2){
        return n;
    }
    return fib(n-1)+fib(n-2);
}

console.log(allFibonacci(9));