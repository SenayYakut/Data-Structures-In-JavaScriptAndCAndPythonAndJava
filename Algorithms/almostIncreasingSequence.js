/*
Given a sequence of integers as an array, determine wheather it is possibleto obtaina stricklyincreasing sequence by removing no more than one element from the array.
*/ 

function almostIncreasingSequence(sequence){
    var nonOrderNum=[];

    for(let i=0; i<sequence.length-1; i++){
        if(sequence[i]>=sequence[i+1]){
        nonOrderNum.push(sequence[i+1]);
        }
    }
    if(nonOrderNum.length<=1) return true;
    else return false;
}
console.log(almostIncreasingSequence([1,3,2]));//true
console.log(almostIncreasingSequence([1,3,0,4,5,2,]));//false
console.log(almostIncreasingSequence([1,2,3,4,5]));//true


