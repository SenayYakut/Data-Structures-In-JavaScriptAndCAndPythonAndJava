/*
A boy is walking a long way from school to his home. To make the walk more fun decides to add up all the numbers of the houses that he passes by during his walk. Unfortunately not all of the houses have numbers written on them, and on top of that the boy regularly taking turns to change street, so the numbers dont appear to him in any particular order.
At some point during the walk the boy encounters a house with number 0 written on it, which suprises him so much that he stops adding numbers to his total right after seeing that house.
For the given sequences of houses determine the sum that the boy will get. It is guaranteed that there will be at least one 0 house on the path.  
*/

function houseNumberSum(inputArray){
    var total=0;
    for(let i=0; i<inputArray.length; i++){
        if(inputArray[i]===0){
            return total;
        }
    total+=inputArray[i];      
    }
    return total;
}

console.log(houseNumberSum([5,1,2,3,0,1,5,0,2]));//11
console.log(houseNumberSum([5,1,0]));//6
console.log(houseNumberSum([0,1,2,3,4,5,6,]));//0

