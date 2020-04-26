/*
Given a string, enclose it in round brackets.
*/

//Solution 1
function encloseInBrackets(str){
    let newStr="("+str.concat(")");
    return newStr;
}
console.log(encloseInBrackets("abacaba"));//(abacaba)
//Solution 2
function encloseInBrackets(str){
    return `(${str})`;
}
console.log(encloseInBrackets("abacaba"));