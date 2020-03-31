/*
    Given an array of strings, return another array containing all of its longest strings
 Input:
 inputArray=["abc","def","g","hi"];
 Expected output:
 allLongestStrings(inputArray)=["abc,"def"];
*/ 
function allLongestStrings(inputArray){
    var longestLength=0;
    var longestStrings=[];

    inputArray.forEach(word=>{
        longestLength=longestLength>word.length ? longestLength:word.length;
    });

    inputArray.forEach(word=>{
        if(word.length===longestLength) longestStrings.push(word);
        
    });

    return longestStrings;
}
console.log(allLongestStrings(["abc","def","gh","ij","l","m","n"]));//["abc"."def"]
console.log(allLongestStrings(["cd","df","senay","yakut"]));//["senay","yakut"]
