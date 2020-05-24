/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/
//Solution 1
function reverseAString(str){
const strChars=str.split("");
let newStr="";
for(let i=0; i<str.length; i++){
    newStr+=str[str.length-i-1];
}
return newStr;
}
console.log(reverseAString("hello"));//olleh
console.log(reverseAString("Howdy"));//ydwoH

//Solution 2
function reverseAString(str){
    const newStr=str.split("").reverse().join("");
    return newStr;

}
console.log(reverseAString("hello"));//olleh
console.log(reverseAString("Howdy"));//ydwoH

//Solution 3
function reverseAString(str){
    let newStr="";
    str=str.split("");
    for(let i=str.length-1; i>=0; i--){
        newStr+=str[i];
    }
    return newStr;
}
console.log(reverseAString("hello"));//olleh
console.log(reverseAString("Howdy"));//ydwoH
