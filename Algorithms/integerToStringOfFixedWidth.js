/*
Given a positive integer number and a certain length, we need to modify the given number to have a specified length. We are allowed to do that either by cutting out leading digits(if the number needs to be shortened) or by adding 0s in front of the original number.
HINTS:
concat()
toString()
substring()
*/

function integerToStringOfFixedWidth(num, width){
    let numStr=num.toString();//to validate if it is a string
    const strWidth=numStr.length;
    const widthDiff=strWidth-width;

    if(strWidth===width){
        return num;
    } 
    return strWidth>width ? numStr.substring(widthDiff, strWidth):numStr.padStart(width,0);   
};
console.log(integerToStringOfFixedWidth(1234, 4));//1234
console.log(integerToStringOfFixedWidth(1234, 2));//34
console.log(integerToStringOfFixedWidth(1234, 6));//001234
console.log(integerToStringOfFixedWidth(1234, 5));//01234

