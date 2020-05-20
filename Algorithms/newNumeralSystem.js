/*
Your informatic teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, He introduced his own numeral system, which he is convinced will help clarify things. His numeral system has base 26, and its digits are respresented by English capital letters-A for 0, B for 1, and so on.
The teacher assigned you the following numeral system exercise: Given a one digit number, you should find all unordered pairs of one digit numbers whose values add up to the number.
HINTS:
charCodeAt()
String.fromCharCode()
*/
function newNumeralSystem(number){
    const numerals=[];
    let startCharCount=65;//ASCII value of first character in alphabet
    let endCharCount=number.charCodeAt(0);

    while(startCharCount <= endCharCount){
        const numeral= `${String.fromCharCode(startCharCount)} + ${String.fromCharCode(endCharCount)}`;
        numerals.push(numeral);
        startCharCount++;
        endCharCount--;
    }
    return numerals;
}
console.log(newNumeralSystem("G"));//[ 'A + G', 'B + F', 'C + E', 'D + D' ] 
console.log(newNumeralSystem("A"));//[ 'A + A' ]
