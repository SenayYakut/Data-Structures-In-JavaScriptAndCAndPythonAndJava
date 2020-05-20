/*
Given a string, find out if its characters can be rearranged to form a palindrome.
HINTS:
split()
hasOwnProperty()
*/

function palindromeRearranging(str){  
 const chars=str.split("");
 let charCount={};
 oddCount=0;
 for(let char of chars){
     if(charCount.hasOwnProperty(char)){
         charCount[char]++;
     }else{
         charCount[char]=1;
     }
 }
 for(let key in charCount){
     if(charCount[key]%2!==0){
        oddCount++;
     }
    }
    return oddCount > 1? false: true;
}

console.log(palindromeRearranging("abba"));//true;
console.log(palindromeRearranging("abbaa"));//true