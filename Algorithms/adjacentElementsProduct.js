/*
Given an array of integers, find the pair of adjacent elements that has the largest product and return the product;
*/
function adjacentElementsProduct(inputArr){
    let largestProduct=inputArr[0]*inputArr[1];
    for(let i=1; i<inputArr.length-1; i++){
        var product=inputArr[i]*inputArr[i+1];
        largestProduct=largestProduct>product? largestProduct:product;
    }
    return largestProduct;
}
console.log(adjacentElementsProduct([3,6,-2,-3,3,7]));//21
console.log(adjacentElementsProduct([3,1,-2,-3,3,7,8,9]));//72
console.log(adjacentElementsProduct([3,6,-2,-3,3,-1]));//18
