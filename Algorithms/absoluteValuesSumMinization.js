 /*
 
 abs(a[0]-x) + abs(a[1]-x)+...+abs(a[a.length-1]-x)
 is the smallest possible (here abs denotes the absolute value).if there are several answers, output the smallest one.
*/

function absoluteValuesSumMinization(a){
    const isEven=a.length%2===0;
    return isEven ? a[(a.length/2)-1] : a[Math.floor(a.length/2)];
}
console.log(absoluteValuesSumMinization([2,4,7]));//4
console.log(absoluteValuesSumMinization([2,4,7,6]));//4
console.log(absoluteValuesSumMinization([2,4,7,6,6]));//7
console.log(absoluteValuesSumMinization([2,4,7,6,6,8]));//7