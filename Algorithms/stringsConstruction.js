/*
How many strings equal to a can be constructed using letters from the string b? Each letter can be used only once and in one string only.
HINTS:
hasOwnProperty()
push()
Math.floor()
Math.min()
split()
*/
//Solution 1
function stringsConstruction(a,b){
    const a1=a.split("");
    const b1=b.split("");
    const hashMapb1={};
    let count=0;
    b1.forEach(char=>{
        if(!hashMapb1[char]){
            hashMapb1[char]=1;
        }else{
            hashMapb1[char]++;
        }
    });
    
    a1.forEach(elem=>{
        while(hashMapb1[elem]!==0){
            count++;
            hashMapb1[elem]--;
        }
    });
    return Math.floor(count/a1.length);
}

console.log(stringsConstruction("abc","abccbaabcmncdds"));//3
console.log(stringsConstruction("abc","abccba"));//2

