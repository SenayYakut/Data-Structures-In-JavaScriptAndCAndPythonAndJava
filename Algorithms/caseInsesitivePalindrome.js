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
//Solution 2
function isCaseInsesitivePalindrome(str){
    var strArr=str.toLowerCase();
    var newArr=[];
    for(var i=0; i<strArr.length; i++){
        newArr.push(strArr[i]);
    }
    return newArr.reverse().join("")===strArr;
}
console.log(isCaseInsesitivePalindrome("Madam"));//true
console.log(isCaseInsesitivePalindrome("aabaa"));//true
