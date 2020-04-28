/*
Fermat's factorization method is:if a*b=n (where a<=b),then there exist some c and d such that n=c^2-d^2.
Your goal is return for a given n such c and d in an array.
Since we want c and d be uniquely determined, in all test cases n is a semiprime number.
HINT:
Math.pow()
*/
function fermactor(n){
    let arr=[];
        for(let i=1; i<n; i++){
            for(let j=1; j<i; j++){
                if((i ** 2 - j ** 2)===n){
                    return[i,j];
                }    
            }
        }
}
console.log(fermactor(15));//[4,1]
console.log(fermactor(6557));//[81,2]


