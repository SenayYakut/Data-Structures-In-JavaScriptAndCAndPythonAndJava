/*
You have 2 integer arrays, a and b, and an integer target value v. Determine whether there is a pair of numbers, where one number is taken from a and other from b, that can be added togerher to get a sum of v. Return true if such a pair exists, otherwise return false.
HINT:
hasOwnProperty()
*/
//Solution 1

function sumOfTwo(a,b,v){
    for(let i = 0; i < a.length; i++){
    for(let j =0; j<b.length; j++){
        if(b[j]===v-a[i]){
            return true;
         }
       }
    }
    return false;
}

console.log(sumOfTwo([1,2,3],[10,20,30,40],42));//true;
console.log(sumOfTwo([1,2,3],[11,2,300,407],42));//false;


function sumOfTwo(a,b,v){
    let component=[];
    for(let i = 0; i < a.length; i++){
       while(!component.includes(v-a[i])){
           component.push(v-a[i]); 
       }
    }
    
      
        for(let i =0; i < b.length; i++){
            if(b.includes(component[i])){
                return true;
            }
        } 
        return false;  

}

console.log(sumOfTwo([1,2,3,3],[10,20,30,40],42));//true;
console.log(sumOfTwo([1,2,3],[11,2,300,407],42));//false;


//Soution 3 much more optimal

function sumOfTwo(a,b,v){
    const hashMap = {};
    for(let num of a){
        const difference = v-num;
        hashMap[difference]=difference;
    }
    
    for(let num of b){
        if(hashMap[num]){
            return true;
        }
    }
    return false;
}


console.log(sumOfTwo([1,2,3,3],[10,20,30,40],42));//true;
console.log(sumOfTwo([1,2,3],[11,2,300,407],42));//false;