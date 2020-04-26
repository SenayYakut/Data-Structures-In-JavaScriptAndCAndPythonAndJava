/*
Check if all digits of the given integer are even
HINTS:
toString()
split()
every()
parseInt()
*/

function evenDigitsOnly(n){
    n=n.toString().split("");
    return n.every(char=>
        parseInt(char)%2===0); 
}
console.log(evenDigitsOnly(248622));//true
console.log(evenDigitsOnly(242386));//false
console.log(evenDigitsOnly(01));//false
