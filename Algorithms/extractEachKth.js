/*
Given array of integers, remove each kth element from it.
Hint:
filter()
*/
//Solution 1
function extractEachKth(inputArray,k){
    let newArray=[];
    for(let i =0; i<inputArray.length; i++){
     if(inputArray[i]%k!==0){
        newArray.push(inputArray[i]);
     }
    }
    return newArray;
}
console.log(extractEachKth([1,2,3,4,5,6,7,8,9,10],3));//[ 1, 2, 4, 5, 7, 8, 10 ] 

//Solution 2
function extractEachKth(arr,k){
    let newArr=arr.filter(char=>char%k!==0);
        return newArr;
}
console.log(extractEachKth([1,2,3,4,5,6,7,8,9,10],3));//[ 1, 2, 4, 5, 7, 8, 10 ] 
