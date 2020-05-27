/*
We will define an n-interesting polygon, Your task is to find the area of a polygon for a given n.
A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side. 
*/
//Solution 1
function shapeArea(n){
const area= ((n*n)+(n-1)*(n-1));
return area;
}

console.log(shapeArea(2));//5
console.log(shapeArea(3));//13
console.log(shapeArea(4));//25
console.log(shapeArea(1));//1

//Solution 2
let shapeArea =(n)=>{
    return Math.pow(n,2) + Math.pow(n-1, 2);
};

console.log(shapeArea(2));//5
console.log(shapeArea(3));//13
console.log(shapeArea(4));//25
console.log(shapeArea(1));//1


