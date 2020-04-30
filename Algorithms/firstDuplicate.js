/*
Given an array a that contains only numbers in the range 1 to a.length, find the first duplicate number for the second accurance has the minimal index.
Another word if there are more than 1 duplicated numbers, return the number for which the second occurance has a smaller index than the second occurance than the other numbers does. If there are not such an element, return -1.
HINTS:
hasOwnProperty()
*/

function firstDuplicate(a){
    const firstDup={};
    for(let num of a){
        if(firstDup.hasOwnProperty(num)){
            return num;
        }
        firstDup[num]=num;
    }
    return -1;
}
console.log(firstDuplicate([2,1,3,5,3,2]));//3
console.log(firstDuplicate([2,4,3,5,1]));//-1


