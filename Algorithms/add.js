/*1- Write a function returns the sum of two numbers
2- Write a function that returns the sum of all numbers regardless of # of parameters.
HINT:
Aritmatic operator
Rest Operator
forEach();
*/

function add1(param1, param2){
    return param1 + param2;
  }
  console.log(add1(2,3));
  
  function add2(param){
    var total=0;
    param.forEach(num=>{
      total+=num;
    });
    return total;
  }
  console.log(add2([1,2,3,4,5]));
  console.log(add2([30,4,34]));
  
//using rest operator
  function add2(...param){
    let total=0;
    param.forEach(num=>{
      total+=num;
    });
    return total;
  }
  console.log(add2(1,2,3,4,5));