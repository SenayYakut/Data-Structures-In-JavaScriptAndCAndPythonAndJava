/*
When you recently visitedyour little nephew, he told yu a sad story"there is a bully at school and  who steals his lunch everyday and locks it away to his locker also leaves a message with a strange, coded message. Your nephew gave you one of the notes in hope that you can decipher it for him. And you did. It looks like he digits in it are replaced with letters and vice versa. Digit 0 is replaced with "a", 1 is replaced with "b" and so on, with digit 9 replaced by "j";

The note is different every day so you decided to write a function that will decipher it for your nephew on an ongoing basis.
*/

function stolenLunch(note){
const chars=note.split(""); 
const dictionary={
    0:"a", 1:"b", 2:"c", 3:"d",
    4:"e", 5:"f", 6:"g", 7:"h",
    8:"i", 9:"j", a:"0", b:"1",
    c:"2", d:"3", e:"4", f:"5",
    g:"6", h:"7", i:"8", j:"9"
}

for(let i=0; i<chars.length; i++){
   if(dictionary.hasOwnProperty(chars[i])){
       chars[i]=dictionary[chars[i]];
   }
};
return chars.join("");
}

//Solution 2
function stolenLunch(note){
const charsArr=note.split("");
let translatedMessage="";
const codeDictionary={
    0:"a", 1:"b", 2:"c", 3:"d",
    4:"e", 5:"f", 6:"g", 7:"h",
    8:"i", 9:"j", a:"0", b:"1",
    c:"2", d:"3", e:"4", f:"5",
    g:"6", h:"7", i:"8", j:"9"  
}
for(let char of charsArr){
    translatedMessage += codeDictionary.hasOwnProperty(char) ? codeDictionary[char]:char;
}
return translatedMessage;

}
console.log(stolenLunch("you'll n4v4r 6u4ss 8t: cdja"))//you "ll never guess it: 2390"
