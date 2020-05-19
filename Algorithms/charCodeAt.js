//Write a program will print the character codes and code points  of A given string

function characterCode(str){
   const len=str.length-1;
   let newArr=[];

   for(let i=0; i<=len; i++){
    newArr.push(parseInt(str.charCodeAt(i)));
    }  
    return newArr;
} 
 console.log(characterCode("Ab☺️c"));//[ 65, 98, 9786, 65039, 99 ] 

let str="ab🥤cd"
let cca = str.charCodeAt(2);
let cpa = str.codePointAt(2);
function characterCode(str){
    console.log(cca, cpa, cca.toString(16), cpa.toString(16));
}
characterCode();//55358 129380 'd83e' '1f964' 

let str="ab🥤c";

let cca = str.charCodeAt(2);
let cpa = str.codePointAt(2);
function characterCode(str){

let char1 = String.fromCharCode(cca);
let char2 = String.fromCodePoint(cpa);
console.log(char1, char2);//� 🥤
}
characterCode(str);
