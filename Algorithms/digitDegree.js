/*
Lets define digit degree of some positive integer as the number of times we need to replace this number with the sum of its digits until we get to a one digit number.
Given an integer, find its digit degree.
HINTS:
toString()
parseInt()
split()
reduce() 
*/

function digitDegree(n){
    return n>=0 && n<=9 ? 0: 1+ digitDegree(+n.toString().split("").reduce((a,b)=>a+ +b,0));
}
console.log(digitDegree(91));//2
console.log(digitDegree(5));//0
console.log(digitDegree(100));//1
