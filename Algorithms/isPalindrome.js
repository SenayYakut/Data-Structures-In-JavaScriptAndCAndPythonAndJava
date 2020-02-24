function isPalindrome(string){
    string=string.toLowerCase();
    var charactersOfString=string.split("");
    var validCharacters="abcdefghijklmnopqruvwxyz".split("");

    var lettersArr=[];
    charactersOfString.forEach(char=>{
        if(validCharacters.indexOf(char)>-1) lettersArr.push(char);
    });
    return lettersArr.join("")===lettersArr.reverse().join("");

}
console.log(isPalindrome("Madam i'm adam"));