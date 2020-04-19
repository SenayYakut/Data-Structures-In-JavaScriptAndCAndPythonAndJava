/*
Check if a string(first argument, str) ends with the given target string(second argument, target).
This challenge can be solved with the endWith()method, which was introduced in ES2015. But for the purpose of this challange, we would like you to use one of the JavaScript substring methods instead.
HINTS:
substr()
*/

function confirmEnding(str, target){   
    const start = str.length-target.length; 
    return str.substr(start)===target;
        
}
console.log(confirmEnding("Abstraction","action"));//true
console.log(confirmEnding("Open sesame","pen"));//false