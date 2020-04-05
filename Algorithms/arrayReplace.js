/*
Given an array of integers, replace all the occurances of elemToReplace with substitutionElem.
*/
//Solution 1
function arrayReplace(inputArray, elemToReplace, substitutionElem){
    for(let i=0; i<inputArray.length; i++){
        if(inputArray[i]===elemToReplace)
            inputArray[i]=substitutionElem;
        
    }
    return inputArray;
}
console.log(arrayReplace([1,2,1],1,3));//[3,2,3]
console.log(arrayReplace([0,2,1],1,3))//[0,2,3]