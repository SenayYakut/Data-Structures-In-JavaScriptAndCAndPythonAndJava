/*
Consider integer numbers from 0 to n-1 written down along the circle in such a way that the distance between any two neighbouring numbers is equal(note that 0 and n-1 are neighbouring too).
Given n and firstNumber, find the number which is written in the radially position to firstNumber.
HINT:
push()
*/

function circleOfNumbers(n, firstNumber){
    let newArr=[];
    let halfWay=Math.floor(n/2);
    for(let i=0; i<n; i++){
        newArr.push(i);
    }
    if(firstNumber<halfWay){
        return newArr[firstNumber+halfWay];
    }else
        return newArr[firstNumber-halfWay];   
}
console.log(circleOfNumbers(10,2));//7
console.log(circleOfNumbers(15,9));//12