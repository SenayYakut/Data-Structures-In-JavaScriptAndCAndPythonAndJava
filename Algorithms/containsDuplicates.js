/*
Given an array of integers, write a function that determines whether the array contains any duplicates. Your function should return true if any elements appear twice in the array, and it should return false if every element is distinct.
Hint:
sort()
*/
//Solution 1

function containsDuplicates(arr){
 arr.sort((a,b)=>{return a-b;});
 for(let i=0; i<arr.length; i++){
     if(arr[i]===arr[i+1]){
         return true;
        }
    }
    return false
}
console.log(containsDuplicates([1,2,3,1]));//true
console.log(containsDuplicates([3,1]));//false
console.log(containsDuplicates([0,1,2,3,0]));//true

//Solution 2
//Should be in hashMaps
