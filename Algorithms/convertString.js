/*
You are given the string s. Your friend just asked you if it's possible to change the string ts to the string t  by removing some characters from it. You are a pro at programming so you decided to create a program to determine this. 
Hints:
concat()
split()
*/

function convertString(s,t){
   
    let word="";
    let counter=0;
    for(let i=0; i<s.length; i++){
        if(s[i]===t[counter]){
            word=word.concat(s[i]);
            counter++;
        }
        if(word===t){
            return true;
        }
    }
    return false;
}
console.log(convertString("ceoydefthf5iyg5h5yts","codefights"));//true
console.log(convertString("addbyca","abcd"));//false
console.log(convertString("senay yakut","senay"));//true