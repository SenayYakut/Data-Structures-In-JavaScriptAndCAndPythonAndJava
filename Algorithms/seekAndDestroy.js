/*
You will be provided with an initial array the first argument in the destroyers function followed by one or more arguments. remove all elements from the initial array that are of the same value as these arguments.
*/
//Solution 1
function seekAndDestroy(arr1, arr2){
    let notComman=[];
        arr1.forEach(elem=>{
            if(!arr2.includes(elem)){
                notComman.push(elem)
            }
        });
    return notComman;
}
console.log(seekAndDestroy([3,5,1,2,2],[2,3,5]));//[1]

//Solution 2
function seekAndDestroy(arr1, arr2){
    const hashMap={};
    const notComman=[];
    arr2.forEach(elem=>{
        if(!hashMap[elem]){
            hashMap[elem]=1;
        }
        else{
            hashMap[elem]++;
        }
    });

    arr1.forEach(char=>{
        if(!hashMap[char])
            notComman.push(char);   
    });
    return notComman;
}
console.log(seekAndDestroy([3,5,1,2,2],[2,3,5]));//[1]