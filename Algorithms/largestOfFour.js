/*
Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain ecatly 4 sub-arrays.
*/
function largestOfFour(nums){
let largetsArr=[];
 nums.forEach(num=>{
    let largest=0;
        for(let i=0; i<num.length; i++){
          largest=num[i]>=largest? num[i]:largest;
     }
    largetsArr.push(largest);          
 }); 
 return largetsArr; 

}
console.log(largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[1000,1001,857,1]]));//[ 5, 27, 39, 1001 ]
console.log(largestOfFour([[4,9,1,3],[13,35,18,26],[32,35,37,39],[10000000,1001,857,1]]));//[ 5, 27, 39, 1001 ]//[ 9, 35, 39, 10000000 ] 

