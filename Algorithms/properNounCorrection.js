/*
Proper nouns always begin with capital letter, followed by small letters.
Correct a given proper noun so that it fits this statement.
HINTS:
toUpperCase()
toLowerCase()
concat()
slice()
*/
//Solution 2
function properNounCorrection(noun){
    const firstLetter = noun.slice(0,1).toUpperCase();
    const restOfLetters = noun.slice(1).toLowerCase();

    return firstLetter.concat(restOfLetters);
}
console.log(properNounCorrection("pARIS"));//Paris
console.log(properNounCorrection("Senay"));//Senay

//Solution 2
function properNounCorrection(noun){
noun=noun.toLowerCase().split("");
noun[0]=noun[0].toUpperCase();
return noun.join("");
}
console.log(properNounCorrection("pARIS"));//Paris
console.log(properNounCorrection("Senay"));//Senay