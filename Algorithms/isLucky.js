/*
Ticket numbers usually consist of an even number of digits. A ticket number is considered luck if the sum of the first half of the digits is equal the sum of the second half. 
Given a ticket n, determine if it is lucky or not.
HINTS:
toString()
substring()
split()
reduce()
parseInt()
*/

function isLucky(n){
let luckyN=n.toString();
let half=luckyN.length/2;
let firstHalf=getTotal(luckyN.substring(0, half));
let secondHalf=getTotal(luckyN.substring(half));

function getTotal(str){
return str.split("").map((char)=>parseInt(char)).reduce((num1,num2)=>
num1+num2);
};
return firstHalf===secondHalf;
}
console.log(isLucky(1230));//true
console.log(isLucky(239017));//false
console.log(isLucky(123));//false

