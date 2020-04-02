/*Check whether the given string is a subsequence of the plaintext alphabet.
HINT:
size property
charCodeAt()
*/

function alphabetSubsequence(s){
  const chars=s.split("");
  const asciiVal=[];
  
  chars.forEach(char=>{
    asciiVal.push(char.charCodeAt(0));
  });
  if(new Set(asciiVal).size!==asciiVal.length) return false;

  for(let i=0; i<asciiVal.length-1; i++){
      if(asciiVal[i]>asciiVal[i+1]) return false;
  }
    return true;
}

console.log(alphabetSubsequence("effg"));//false
console.log(alphabetSubsequence("ace"));//true
console.log(alphabetSubsequence("bxz"));//true