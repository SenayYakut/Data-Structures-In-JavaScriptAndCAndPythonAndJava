/*
Given an array of strings, sort them in the order of increasing lengths. If two strings have the same lenght, their relative order must be the same as in the initial array.
HINT:
sort();
*/

function sortByLength(arr){
    arr.forEach(elem=>{
        elem.sort((num1, num2)=>{
            return num1-num2;
        });
    });
    return arr;
}
console.log(["a","zz","abc","zzz"]);//[ 'a', 'zz', 'abc', 'zzz' ] 
console.log(["a","zz","zzz","abc"]);//[ 'a', 'zz', 'zzz', 'abc' ] 

