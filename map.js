//Map in JavaScript
/*var map1=new Map([[1,2],[2,3],[3,4],[4,5]]);
console.log("Map1");
console.log(map1);

var map2=new Map([["firstname","Senay"],["lastname","Yakut"],["website","github/Senaykt"]]);
console.log("Map2");
console.log(map2);

var map3=new Map([["whole numbers",[1,2,3,4]],["decimal numbers",[1.1,1.2,1.3,1.4]],["negative numbers",[-1,-2,-3,-4]]]);
console.log("Map3");
console.log(map3);

var map4= new Map([["first name", "lastname"],["Senay","Yakut"]],[["friend1","friend2"],["Neha","Marissa"]]]);
console.log("Map4");
console.log(map4);
*/
//map() function in javaScript, array method
// JavaScript to illustrate m[ 2, 56, 78, 34, 65 ];
function func(arr) 
{ 
// new mapped array 
var new_arr = arr.map(function(num) { return num / 2; }); 
return new_arr;
} 
console.log(func([ 2, 56, 78, 34, 65])); 
//JavaScript map() method doesnt modify the original array, instead it creates a new array with the results of calling a provided function on every element in the calling array.

let b="Hello World".split("");
let a = b.map(x=>{ 
  return x.charCodeAt(0)
});
// a now equals [72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100]
console.log(a);//[ 72, 101, 108, 108, 111, 32, 87, 111, 114, 108, 100 ] 

console.log(['1', '2', '3'].map( str => parseInt(str)));//[1,2,3]

let xs = ['10', '10', '10'];
let z=xs.map(elem=>{
    parseInt(xs);
});

console.log(z);

// create a function to use

const makeSweeter=sweetItem=>sweetItem*2;
// we have an array
const sweetArray = [2, 3, 4, 5, 35];

// call the function we made. more readable
const sweeterArray = sweetArray.map(makeSweeter);
console.log(sweeterArray); // [4, 6, 8, 10, 70]

let fish = [ "piranha", "barracuda", "cod", "eel" ];

// Print out each item in the array as plural
let printFish = fish.map(individualFish => {
    return `${individualFish}s`;
});

console.log(printFish);