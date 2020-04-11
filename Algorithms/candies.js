/*
n children have got m pieces of candy. They want to eat as much candy as they can, but each child must eat exactly the same amount of candy as any other child.
Determine how many pieces of candy will be eaten by all the children together. Individual pieces of candy cannot be split.
HINT:
Math.floor()
*/
//Solution 1
function candies(n,m){
    if(m<n || m===0){
        return 0;
    }
    const remain=m%n;
    if(remain===0){
        return m;
    }else{
        return m-remain;
    }
}
console.log(candies(3,10));//9

//Solution 2
function candies(n,m){
    if(m<n || m===0){
        return 0;
    }
    const candyPerChild= Math.floor(m/n);
    const total=candyPerChild*n;
    return total;
}
console.log(candies(3,10));//9