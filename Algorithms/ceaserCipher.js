function ceaserCipher(str, num){
    var lowerCaseStr=str.toLowerCase();
    var alphabet="abcdefghijklmnopqrstuvwxyz".split("");
    var newString="";
  
    for(var i=0; i<str.length; i++){
      var currentLetter = lowerCaseStr[i];
      if(currentLetter===" "){
        newString+=currentLetter;
        continue;
      }
      var currentIndex=alphabet.indexOf(currentLetter);
      var newIndex=currentIndex+num;
      if(newIndex>25)newIndex=newIndex-26;
      if(newIndex<0)newIndex=newIndex+26;
      if(str[i]===str[i].toUpperCase()){
        newString+=alphabet[newIndex].toUpperCase();
      }
      else{
        newString+=alphabet[newIndex];
      }
    }
    return newString;
  }
  console.log(ceaserCipher("Zoo Keeper", 2));