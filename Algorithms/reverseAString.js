/*
Reverse the provided string.
You may need to turn the string into an array before you can reverse it.
Your result must be a string.
*/
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