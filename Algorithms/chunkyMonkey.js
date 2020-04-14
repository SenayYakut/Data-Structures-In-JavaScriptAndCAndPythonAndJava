/*
Write a function that splits an array(first argument)into groups the length of size(second argument)and returns them as a two-dimensional array.
HINTS:
slice()
*/

function chunkyMonkey(arr, size){
    var nested=[];
    var counter=0;
    while(counter<arr.length){
        nested.push(arr.slice(counter, counter+=size));
    }
    return nested;   
}
console.log(chunkyMonkey(["a","b","c","d"],2));//[["a","b"],["c","d"]]
console.log(chunkyMonkey([0,1,2,3,4,5],4));//[[0,1,2,3],[4