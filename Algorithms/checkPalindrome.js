/*
Given the string, check if it is a palindrome
HINTS:
toLowerCase()
split()
reverse()
join()
*/
/*
Solution 1;
function checkPalindrome(str){
const originalStr=str.toLowerCase();
const reversedStr=originalStr.split("").reverse().join("");
    return originalStr===reversedStr;
}
console.log(checkPalindrome("aabaa"));//true
console.log(checkPalindrome("abac"));//false
console.log(checkPalindrome("a"));//true
console.log(checkPalindrome("Madam"));//true
*/
//Solution 2

function checkPalindrome(inputString){
    const midElem=  Math.floor(inputString/2);

    for(var i=0; i<inputString.length; i++){
        for(var j=inputString.length-1; j>=0; j--){
            while(inputString[i]===inputString[j]){
                return true;
            }
            if(inputString[i]!==midElem || inputString[j]!==midElem){
                return false;
            }
        }
        return true;
    }
}
    console.log(checkPalindrome("aabaa"));//true
    console.log(checkPalindrome("a"));//true;
    console.log(checkPalindrome("Madam"));//false
    console.log(checkPalindrome("senay"));//false






