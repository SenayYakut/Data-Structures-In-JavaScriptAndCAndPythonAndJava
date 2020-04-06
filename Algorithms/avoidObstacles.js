/*
You are given an array of integers representing coordinates of obstacles situated on a straight line.
Assume that you are jumping from the point with coordinate 0 to the right. You are allowed only to make jumps of the same length represented by some integer.
Find the minimal length of the jump enought to avoid all the obstacles.

HINTS:
sort()
every()
*/

function avoidObstacles(inputArray){
    var inputArray=inputArray.sort((a,b)=>a-b);
    var largestArrayValue=inputArray[inputArray.length-1];
    for(var i=1; i<=largestArrayValue+1; i++){
        if(inputArray.every(element=>element%i!==0)){
            return i;
        }
    }
}
console.log(avoidObstacles([5,3,6,7,9]));//4
