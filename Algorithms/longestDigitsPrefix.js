/*
    Given a string, output its longest prefix which contains only digits.
    HINTS:
    split()
    includes()
    push()
    join()
*/

function longestDigitsPrefix(inputStr){
    const strArr=inputStr.split("");
    const digits=["0","1","2","3","4","5","6","7","8","9"];
    let prefix="";
    

    for(let char of inputStr){
        const num=parseInt(char);
        if(isNaN(num)){
            break;
        }
        prefix += char;     
    }

    return prefix;   
}
console.log(longestDigitsPrefix("123aa1"));//123
console.log(longestDigitsPrefix("5678senay678"))//5678
console.log(longestDigitsPrefix("1senay678"))//1

