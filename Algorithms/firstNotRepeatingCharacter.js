/*
Note:Write a solution that only iterates over the string once and uses O(1) additional memory, since this is what you would be asked to do in a real interview.
Given a string s, find and return the first instance of a non-repeating character in it. If there is no such a character "_".
HINTS:
split()
hasOwnProperty()
*/
//Solution 1
function firstNotRepeatingCharacter(s){
    const chars=s.split("");
    const duplicates={};
    let answer="_";
    let indexAnswer=Number.MAX_SAFE_INTEGER;

    chars.forEach((element,index)=>{
        if(!duplicates.hasOwnProperty(element)){
            duplicates[element]={
                count:1,
                index
        };
    }else{
            duplicates[element].count++;
            duplicates[element].index=index;
        }
        
    });
    for(const key in duplicates){
    if(duplicates[key].count===1 && duplicates[key].index<indexAnswer){
        answer=key;
        indexAnswer=duplicates[key].index;
        }
    }
    return answer;
}
console.log(firstNotRepeatingCharacter("abacabad"));//c

//Solution 2
//Construct a character count array from given string
function firstNotRepeatingCharacter(s){
const chars=s.split("");
const charsCount=[];

chars.forEach(element=>{
    if(!charsCount[element]){
        charsCount[element]=1;
    }else{
        charsCount[element]++;
    }
});
for( let element in chars){
    if(charsCount[chars[element]]===1){
        return chars[element];
    }
}
return "_";
}
console.log(firstNotRepeatingCharacter("abacaba"));//c
console.log(firstNotRepeatingCharacter("senay"));//s
console.log(firstNotRepeatingCharacter("geeksforgeeks"));//f
console.log(firstNotRepeatingCharacter("abacabaabacaba"));//_