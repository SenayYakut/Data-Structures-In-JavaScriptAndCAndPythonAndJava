/*
An email address such as "JohnSmith@example.com" is made up of a local part("John.Smith"), an "@" symbol, then a domain part("example.com").
The domain name part of an email adress may only consist of letters, digits, hyphenss and dots. The local part,however allows a lot of different characters. 

Given a valid email adress, find its domain part.
Hints:
slice()
lastIndexOf()
*/
//Solution 1
function findEmailDomain(adress){
    adress=adress.split("@");
    return adress[adresArr.length-1];
}
console.log(findEmailDomain("senaykt@gmail.com"));//gmail.com
console.log(findEmailDomain("code@code.org"));//code.org
console.log(findEmailDomain("sf@sfpl.edu"));//sfpl.edu


//Solution 2
function findEmailDomain(adress){
    const lastAtIndex=adress.lastIndexOf("@");
    return adress.slice(lastAtIndex+1, adress.length);
}
console.log(findEmailDomain("senaykt@gmail.com"));//gmail.com
console.log(findEmailDomain("code@code.org"));//code.org
console.log(findEmailDomain("sf@sfpl.edu"));//sfpl.edu