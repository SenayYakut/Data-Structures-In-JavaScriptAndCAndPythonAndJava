/*
Translate the provided string to pig latin.
Pig latin takes the first consonant(or consonant cluster)of an English word, moves it to the end of word and suffixes an "ay".
if a word begins with a vowel you just add "way" to the end.
Input strings are guaranteed to be English words in all lowercase.
HINTS:
split()
test()
join()
push()


function pigLatin(str){
const letters = str.split("");
const vowelRegex =  /[aeiou]/;

if(vowelRegex.test(letters[0])){
    return `${str}way`;
}
while(true){
    if(!vowelRegex.test(letters[0])){
        letters.push(letters.splice(0,1));
    }else{
        break;
    }
}
    str = letters.join("")+"ay";
    
    return str;
}
*/

function pigLatin(str){
const letters=str.split("");
const regexVowels=/[aeuio]/;

if(regexVowels.test(letters[0])){
    return `${str}way`;
}
while(true){
    if(!regexVowels.test(letters[0])){
        letters.push(letters.splice(0,1));
    }else{
        break;
    }
}
str = letters.join("")+ "ay";
return str;

}
console.log(pigLatin("glove"));//oveglay 
console.log(pigLatin("eight"));//eightway




 
