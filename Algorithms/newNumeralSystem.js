/*
Your informatic teacher at school likes coming up with new ways to help you understand the material. When you started studying numeral systems, He introduced his own numeral system, which he is convinced will help clarify things. His numeral system has base 26, and its digits are respresented by English capital letters-A for 0, B for 1, and so on.
The teacher assigned you the following numeral system exercise: Given a one digit number, you should find all unordered pairs of one digit numbers whose values add up to the number.
HINTS:
charCodeAt()
String.fromCharCode()
*/
function newNumeralSystem(n){
    let pairs=[];
    for(let i = 0; i<=n; i++){
        while((i+1)===n){
            pairs.push(i);
        }
    }
    return pairs; 
}
console.log(newNumeralSystem(6));