/*
Given an array of integers numbers, we would like to find the closet pair of elements that adds up to sum.
Return the distance between the closest pair(absolute difference between 2 pairs)
there isnt any pair that adds up to sum, return -1.
HINTS:
Math.abs()
*/

function findClosestPair(num, sum){
    let pairs=[];
    for(let i=0; i<num.length; i++){
        for(let j=1; j<num.length; j++){
            if(num[i]+num[j]===sum){
                pairs.push(Math.abs(j-i));
            }
        }
    }
    if(pairs.length===0){
        return -1;
    }
    pairs.sort();
    return pairs[0];
}
console.log(findClosestPair([1,0,2,4,3,0],5));//2
console.log(findClosestPair([2,3,7],8));//-1
console.log(findClosestPair([1,2,0,1],1));//1