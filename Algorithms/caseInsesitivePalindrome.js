/*
Given a string, check if it can become a palindrome through a case change of some(possibly, none)letters.
HINTS:
join()
reverse()
toLowerCase()
split()
*/
//Solution 1;
function isCaseInsesitivePalindrome(str){
var lowerCaseStr=str.toLowerCase();
var reversed=lowerCaseStr.split("").reverse().join("");

return reversed===lowerCaseStr;

}
console.log(isCaseInsesitivePalindrome("aabaa"));//true
console.log(isCaseInsesitivePalindrome("Madam"));//true;