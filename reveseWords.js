function reverseWords(string){
    var stringArr=string.split(" ");
    var reversedWordsArr=[];

    stringArr.forEach(word=>{
        reversedWord="";
        for(var i=word.length-1; i>=0; i--){
            reversedWord+=word[i];
        }
    reversedWordsArr.push(reversedWord);
    });
    return reversedWordsArr.join();
}

console.log(reverseWords("i'm Senay"));