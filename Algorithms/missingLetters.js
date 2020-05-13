/*
Find the missing letter in the passed letter range and return it.
if all letters are present in the range, return undefined.
Hint:
split()
*/

function missingLetters(inputLetters){
const alphabet="abcdefghijklmnopqrstuvwxyz".split("");
inputLetters=inputLetters.split("");

    for(let i=0; i<inputLetters.length; i++){
        if(inputLetters[i]!==alphabet[i]){
             return alphabet[i];
        
        }
    }
    return undefined;
}
console.log(missingLetters("abce"));//"d"
console.log(missingLetters("abcdefghjklmno"));//i
console.log(missingLetters("abcdefghijklmnopqrstuvwxyz"));//undefined;
console.log(missingLetters("bce"));//"d"
