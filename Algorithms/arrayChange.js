/*
You are given an array of integers. On each move you are allowed to increase exactly one of its element by one. Find the minumum numbers of moves required to obtain a strickly increasing sequence from the input.  
*/
function arrayChange(inputArr){
    var counter=0;
    for (let i=0; i<inputArr.length; i++){
        if(inputArr[i]>=inputArr[i+1]){
        var difference=inputArr[i]+1-inputArr[i+1];
        inputArr[i+1]=inputArr[i]+1;
        counter+=difference;
    }
}
    return counter;
}
console.log(arrayChange([1,1,1]));//3
console.log(arrayChange([1,1,6]));//1


