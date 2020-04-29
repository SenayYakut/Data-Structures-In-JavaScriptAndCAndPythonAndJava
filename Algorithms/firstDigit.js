/*
Write a program which will take a string as an input and return left most digit(a Number from 0-9);
HINTS:
split()
includes()
*/
//Solution 1
function firstDigit(str){
    str=str.split("");
    for(let i=0; i<str.length; i++){
        if(str[i]==="0" || str[i]==="1" || str[i]==="2" || str[i]==="3" || str[i]==="4" || str[i]==="5" ||str[i]==="6" || str[i]==="7" || str[i]==="8" || str[i]==="9"){
            return str[i];
        };
    }
    return "No digit";
}
console.log(firstDigit("var_1_int"));//1
console.log(firstDigit("q2q-q"));//2
console.log(firstDigit("0ss"));//0

//Solution 2
function firstDigit(inputStr){
    const digits=["0","1","2","3","4","5","6","7","8","9"];
    const chars=inputStr.split("");
    for(let i=0; i<chars.length; i++){
        if(digits.includes(chars[i])){
        return chars[i];
        }
    }
}

console.log(firstDigit("var_1_int"));//1
console.log(firstDigit("q2q-q"));//2
console.log(firstDigit("0ss"));//0

