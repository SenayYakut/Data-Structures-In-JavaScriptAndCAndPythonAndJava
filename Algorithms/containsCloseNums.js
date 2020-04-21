/*
Given an array of integers nums and an integer k, determine whether there are two distinct indices i and j in the array where nums[i] - nums[j] and the absolute difference between i and j is less than or equal to k.
HINTS:
Math.abs()
*/
//Solution 1
function containsCloseNums(nums,k){
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(i !==j){
              if(nums[i]===nums[j]){
                if(Math.abs(i-j)<=k){
                    return true;
                }
            }
        }
    }
}
    return false;
    
}

//Solution 2
function containsCloseNums(nums, k){
    for(let i=0; i<nums.length; i++){
        for(let j=0; j<nums.length; j++){
            if(i!==j && nums[i]===nums[j] && Math.abs(i-j)<=k){
                        return true;
                    }
                }
            }
        return false;
    }
    

console.log(containsCloseNums([0,1,2,3,5,2],3));//true
console.log(containsCloseNums([0,1,2,3,5,2],2));//false
