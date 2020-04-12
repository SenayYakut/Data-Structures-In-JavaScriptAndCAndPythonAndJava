/*
Given a character, check if it represents an odd digit, an even digit or not a digit at all.
HINTS:
isNaN()
parseInt()
*/
//Solution 1;
function characterParity(symbol){
    if(isNaN(symbol)){
    return "not a digit";    
    }else if(symbol%2===0){
    return "even";
    }else{
    return "odd";
    }
}
console.log(characterParity(5));//odd
console.log(characterParity(8));//even
console.log(characterParity("q"));//not a digit
