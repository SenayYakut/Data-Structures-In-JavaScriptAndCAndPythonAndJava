/*
You have 2 integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and other from b, that can be added togerher to get a sum of v. Return true if such a pair exists, otherwise return false.
HINT:
hasOwnProperty()
*/
//Solution 1
function sumOfTwo(a,b,v){
    let sumNumbers=[];
    for(let i = 0; i < a.length; i++){
        sumNumbers.push(v-a[i]);
    for(let j =0; j<b.length; j++){
        if(b[j]===sumNumbers[i]){
            return true;
         }
       }
    }
    return false;
}

console.log(sumOfTwo([1,2,3],[10,20,30,40],42));//true;
console.log(sumOfTwo([1,2,3],[11,2,300,407],42));//false;

//Solution 2
function sumOfTwo(a,b,v){
    let component=[];
    for(let i = 0; i < a.length; i++){
        b.forEach(element=>{
            if(element===(v-a[i])){
            return true;
            };
        });
    }
    return false;
}
console.log(sumOfTwo([1,2,3],[11,2,300,407],42));//false;


