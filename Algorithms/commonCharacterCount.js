/*
Given two strings, find the number of common characters between them.
HINTS:
split()
hasOwnProperty()
*/
function commonCharacterCount(s1,s2){
    const s1CharsArr=s1.split("");
    const s2CharsArr=s2.split("");
    const s1CharsObj=getCharsObj(s1CharsArr);
    const s2CharsObj=getCharsObj(s2CharsArr);
    let total=0;

    for(let prop in s1CharsObj){
        if(s2CharsObj.hasOwnProperty(prop)){
            if(s2CharsObj[prop]<s1CharsObj[prop]){
                total+=s2CharsObj[prop];
            }else{
                total+=s1CharsObj[prop];
            }
        }
    }
    return total;

    //i will create a helper function
    function getCharsObj(chars){
        let charObj={};
        for(let i=0; i<chars.length; i++){
            if(charObj.hasOwnProperty(chars[i])){
                charObj[chars[i]]++;
            }else{
                charObj[chars[i]]=1;
            }
        }
        return charObj;
    }
}

console.log(commonCharacterCount("aabcc","adcaa"));//3
console.log(commonCharacterCount("12346","22222"));//1

