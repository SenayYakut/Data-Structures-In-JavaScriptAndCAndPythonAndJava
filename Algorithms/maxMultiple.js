/*
Given a divisor and a bound, find the largest integer N such that:
N is divisible by divisor.
N is less than or equal to bound
N is greater than 0.
It is guaranteed that such a number exists.
*/

function maxMultiple(divisor, bound){
    let number=1;
    for(let i=1; i<=bound; i++){
        if(i%divisor===0){
          number=number>=i ? number:i;
        }
    }
    return number;    
}
console.log(maxMultiple(3,10));//9
console.log(maxMultiple(4,10));//8
console.log(maxMultiple(5,10));//10
//8

