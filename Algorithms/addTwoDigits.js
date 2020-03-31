/*You are given a two-digit integer n. Return the sum of its digits.

For n=29, the output should be addTwoDigits(n)=11;

HINT:
split();
parseInt();
toString();
reduce();
*/

function addTwoDigits(n){
    let numArr=n.toString().split("");
    return parseInt(numArr[0])+parseInt(numArr[1]);
}
console.log(addTwoDigits(29));//11
console.log(addTwoDigits(11));//2
console.log(addTwoDigits(10));//1

