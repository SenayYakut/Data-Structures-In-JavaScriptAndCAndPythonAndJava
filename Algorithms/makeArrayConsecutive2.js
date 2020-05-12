/*
    Ratiorg got statues of different sizes as a present from CodeMaster for his birthday, each statues having an non-negative integer size. Since he likes to make things perfect, he wants to arrange them from smallest to largest so that each statue will be bigger than the previous one exactly by 1. He may need some additional statues to be able to accomplish that. Help him figure it out the minimum number of addition statues needed.
    HINTS:
    sort()
    index() 
*/
function makeArrayConsecutive2(arr){
    let sortedArr=arr.sort((a,b)=>{
        return a-b;
    });
    let counter=0;
    const min=sortedArr[0];
    const max=sortedArr[sortedArr.length-1];
    for(let i=min; i<max; i++){
       if(!sortedArr.includes(i)){
        counter++;
       }
    }
    return counter;
}
console.log(makeArrayConsecutive2([6,2,3,8]));//3
console.log(makeArrayConsecutive2([6,2,3]));//2
console.log(makeArrayConsecutive2([2,3,4]));//0


