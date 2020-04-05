/*
Given an array of integers, find the maximal absolute difference any two of its adjacent elements.
HINT:
Math.abs()
*/
//Solution 1
function arrayMaximalAdjacentDifference(inputArray){
    let maxDiff=Math.abs(inputArray[1]-inputArray[0]);
    for(let i=0; i<inputArray.length; i++){
        let absoluteDiff = Math.abs(inputArray[i-1]-inputArray[i]);
        if(absoluteDiff>maxDiff){
            maxDiff=absoluteDiff;
        }
     }
        return maxDiff;
    }
    
console.log(arrayMaximalAdjacentDifference([2,4,1,0,-1,-4]));//3
console.log(arrayMaximalAdjacentDifference([2,4,1,0,-1,5]));//6
console.log(arrayMaximalAdjacentDifference([-7,-1,-4]));//6
console.log(arrayMaximalAdjacentDifference([0,-1,-4,9]));//13

//Second solution

function arrayMaximalAdjacentDifference(inputArray){
    let maxDiff=Math.abs(inputArray[0]-inputArray[1]);
    for(let i=0; i<inputArray.length; i++){
        let absoluteDiff=Math.abs(inputArray[i]-inputArray[i-1]);
        maxDiff=absoluteDiff>maxDiff?absoluteDiff:maxDiff;   
    }
    return maxDiff;
}
console.log(arrayMaximalAdjacentDifference([2,4,1,0,-1,-4]));//3
console.log(arrayMaximalAdjacentDifference([2,4,1,0]));//3
console.log(arrayMaximalAdjacentDifference([-7,-1,-4]));//6
console.log(arrayMaximalAdjacentDifference([0,-1,-4,9]));//13