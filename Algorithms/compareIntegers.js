/*
Compare two integers given as strings.
HINT:
parseInt()
*/
//Solution 1
function compareIntegers(a,b){
    a = parseInt(a);
    b = parseInt(b);
    if(a<b){
        return "less";
    }else if(a>b){
        return "greater";
    }else{
        return "equal";
    }
}
console.log(compareIntegers("12","13"));//less
console.log(compareIntegers("875","799"));//greater
console.log(compareIntegers("1000","1000"));//equal

//Solution 2
function compareIntegers(a,b){
    a=parseInt(a);
    b=parseInt(b);
return a<b? "less": a>b ? "greater": "equal";

}
console.log(compareIntegers("12","13"));//less
console.log(compareIntegers("875","799"));//greater
console.log(compareIntegers("1000","1000"));//equal