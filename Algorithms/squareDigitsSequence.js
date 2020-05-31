/*
Consider a sequence of numbers a0, a1, …, an, in which an element is equal to the sum of squared digits of the previous element. The sequence ends once an element that has already been in the sequence appears again.

Given the first element a0, find the length of the sequence.
HINTS:
includes()
push()
toString()
split()
map()
parseInt()
reduce()

*/
function squareDigitsSequence(a0){
let unique=[a0];
let count=1;

    while(true)
    {
    count++;
    a0=squaredNum(a0);
        if(unique.includes(a0)){
        return count;
        }
        else{
        unique.push(a0);
        }
    }

   
    function squaredNum(a0){
        const chars=a0.toString().split("").map(char=> parseInt(char) ** 2);
        const  sum=chars.reduce((a,b)=>a+b);
        return sum;
    }

return count;
}
console.log(squareDigitsSequence(16));//9
console.log(squareDigitsSequence(103));//4



