/*
Determine whether the given string can be obtained by one concatenation of some string to itself.
*/

function isTandemRepeat(inputString){
    const len=inputString.length;
    const half=Math.floor(inputString.length/2);

    if(len%2!==0){
        return false;
    }
    const firstHalf=inputString.slice(0, half);
    const secondHalf=inputString.slice(half)
    return firstHalf===secondHalf;
}
console.log(isTandemRepeat("tandemtandem"));//true
console.log(isTandemRepeat("qqq"));//false
console.log(isTandemRepeat("senayyakut"));//false
console.log(isTandemRepeat("2w2ww"));//false



