/*
Flatten a nested array. You must account for varying levels of nesting.
HINTS:
isArray()
push()
*/
//i will use recursion to solve this problem
function flattenArray(arr){
    const oneArray=[];

    flatten(arr);

    function flatten(arr){
    arr.forEach(element=>{
        if(Array.isArray(element)){
            flatten(element);
        }else{
            oneArray.push(element);
        }
        });
    }
    return oneArray;
}
console.log(flattenArray([1,2,3,[4,5],[[[6]]]]));//[1,2,3,4,5,6]
console.log(flattenArray([1,2,3,[4,5],[[[6]]],[[[7,8,10]]]]));//[1,2,3,4,5,6,7,8,10]
                