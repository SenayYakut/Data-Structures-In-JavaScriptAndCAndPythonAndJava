/*
Given array of integers. Find the maximum possible sum of some of its k consecutive elements.
*/

function maxConsecutiveSum(inputArray, k){
    var maxSum=0;
    var temp_sum=0;;
    for(let i=0; i<k-1; i++){
        temp_sum+=inputArray[i];
    }
    for(let i=k-1; i<inputArray.length; i++){
        temp_sum+=inputArray[i];
        if(temp_sum>maxSum){
            maxSum=temp_sum;
        }
        temp_sum-=inputArray[i-k+1];
    }
    return maxSum;
    
}
console.log(maxConsecutiveSum([2,3,5,1,6],2));