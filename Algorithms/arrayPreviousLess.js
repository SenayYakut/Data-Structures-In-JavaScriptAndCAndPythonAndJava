/*
Given array of integers, for each position i, search among the previous positions for the last(from the left) position that contains a smaller value. Store this value
at position i in the answer. If no such value can be found, store -1 instead.
*/
//Solution 1
function arrayPreviousLess(items){
    var newArr=[-1];
        for(let i=1; i<items.length; i++){
            if(items[i]>items[i-1]){
                newArr.push(items[i-1]);
            }else{
                newArr.push(-1);
            }
        } 
        return newArr;         
    }
    console.log(arrayPreviousLess([3,5,2,4,5]));//[-1,3,-1,2,4]
    console.log(arrayPreviousLess([0,4,5,3,10]));//[-1,0,4,-1,3]
