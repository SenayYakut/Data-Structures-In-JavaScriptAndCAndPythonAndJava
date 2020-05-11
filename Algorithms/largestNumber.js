/*
For n=2, the output should be largestNumber(n)=99.
n is the digit number
HINTS:
concat()
parseInt()
*/
//Solution 1
function largestNumber(n){
    let num="";
    for(let i=0; i<n; i++){
        num=num.concat("9");   
    }  
    return parseInt(num);
}
console.log(largestNumber(3));//999
console.log(largestNumber(2));//99
console.log(largestNumber(5));//99999

//Solution 2
function largestNumber(n){
    let number= "9".repeat(n);
    return parseInt(number);
}
console.log(largestNumber(3));//999
console.log(largestNumber(2));//99
console.log(largestNumber(5));//99999