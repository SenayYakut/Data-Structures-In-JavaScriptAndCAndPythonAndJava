/*
Given an integer n, the task is: Write a program to print the maximum number of bishops that can be placed on a n x n chessboard so that no two bishops attack each other. For example, maximum 2 bishops can be placed safely on 2 x 2 chessboard.
*/
//The maximum bishops that can be placed on an n * n chessboard will be 2*(n-1).
function maximumBishops(n){
    var maxBishop;
    if(n===0){
        maxBishop = 0;
    }else if(n===1){
        maxBishop = 1;
    }else{
       maxBishop = 2*(n-1);
    }
    return maxBishop;
}
console.log(maximumBishops(2));//2
console.log(maximumBishops(4));//6
console.log(maximumBishops(5));//8

