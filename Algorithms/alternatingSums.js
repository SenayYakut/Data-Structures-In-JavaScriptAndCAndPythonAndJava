/*
Several people are standing in a row and need to be divided into two teams. The first person goes into team 1, the second goes into team 2, and so on.
You are a given an array of positive integers. the weights of people. Return an array of 2 integers, where the first element is total weights of team 1 and second element is total weight of team 2 after division is complete.
*/
//Solution 1
function alternatingSums(arr){
    var weights=[];
    var team1=0;
    var team2=0;

    for(var i=0; i<arr.length; i+=2){
        team1 += arr[i];
    }

    for(var j=1; j<arr.length; j+=2){
        team2+=arr[j];    
    }
    weights.push(team1,team2);
    return weights;
}
console.log(alternatingSums([50,60,60,45,70]));//[180,105]
console.log(alternatingSums([2,4,1,2,3,5]));//[6,11]


//Solution 2
function alternatingSums(arr){
    var evenSum=0;
    var oddSum=0;

    arr.forEach((element, index)=>{
        if(index%2===0){
            evenSum+=element;
        }else{
            oddSum+=element;
        }
    });

    return [evenSum, oddSum];
}
console.log(alternatingSums([50,60,60,45,70]));//[180,105]
console.log(alternatingSums([2,4,1,2,3,5]));//[6,11]
