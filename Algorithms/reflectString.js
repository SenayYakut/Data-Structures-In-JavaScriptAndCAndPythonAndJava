/*
Define a string reflection as the result of applying the alphabet reflection to each of its characters.
Reflect the given string.
HINTS:
split()
*/
//Solution 1
function reflectString(str){
const alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const strChars=str.split("");
let newStr="";
let index="";
for(let i=0; i<strChars.length; i++){
        char = strChars[i];
        index = alphabet.length-(alphabet.indexOf(char)+1);
        newStr+=alphabet[index];    
    }
    return newStr;
}
console.log(reflectString("name"));//mznv

//Solution 2
function reflectString(str){
const strChars=str.split("");
const alphabet={
    a:"z",b:"y",c:"x",d:"w",
    e:"v",f:"u",g:"t",h:"s",
    i:"r",j:"q",k:"p",l:"o",
    m:"n",n:"m",o:"l",p:"k",
    q:"j",r:"i",s:"h",t:"g",
    u:"f",v:"e",w:"d",x:"c",
    y:"b",z:"a"};
let reflected="";
strChars.forEach(char=>{
reflected+=alphabet[char];
});
return reflected;
}
console.log(reflectString("name"));//mznv
