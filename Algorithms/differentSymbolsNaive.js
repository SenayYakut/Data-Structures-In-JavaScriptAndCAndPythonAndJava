/*
Given a string, find the number of different characters in it.
HINTS:
includes()
split()
push()
*/

//Solution 1

function differentSymbolsNaive(s){
    const sChars=s.split("");
    let hashMap=[];

    for(let i=0; i<sChars.length; i++){
        while(!hashMap.includes(sChars[i])){
            hashMap.push(sChars[i]);
        }       
    }
    return hashMap.length;
}
console.log(differentSymbolsNaive("cabca"));//3
console.log(differentSymbolsNaive("Senay"));//5
console.log(differentSymbolsNaive("Senay Yakut"));//10

//Solution 2
function differentSymbolsNaive(s){
    const uniqueChars=[];
    const inputChars=s.split("");
    inputChars.forEach(char=>{
        if(!uniqueChars.includes(char)){
            uniqueChars.push(char);
        }
    })
    return uniqueChars.length;
}
console.log(differentSymbolsNaive("cabca"));//3
console.log(differentSymbolsNaive("Senay"));//5
console.log(differentSymbolsNaive("Senay Yakut"));//10
//Solution 1 and 2 has the same idea but i used different methods

//Solution 3

function differentSymbolsNaive(s){
   const uniqueChars={};
   const inputChars=s.split("");

   inputChars.forEach(char=>{
    uniqueChars[char]=1;
   });
   return Object.keys(uniqueChars).length;
}
console.log(differentSymbolsNaive("cabca"));//3
console.log(differentSymbolsNaive("Senay"));//5
console.log(differentSymbolsNaive("Senay Yakut"));//10
//Solution 4

function differentSymbolsNaive(s){
    const uniqueChars=new Set();
    const inputChars=s.split("");
    inputChars.forEach(char=>{
        uniqueChars.add(char);
    });
    return uniqueChars.size;
}
console.log(differentSymbolsNaive("cabca"));//3
console.log(differentSymbolsNaive("Senay"));//5
console.log(differentSymbolsNaive("Senay Yakut"));//10


