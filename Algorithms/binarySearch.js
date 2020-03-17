//implementation of binarySearch with recursion consept 
function binarySearch(numArray, key){
    var middleIndx=Math.floor(numArray.length/2);
    var middleElem=numArray[middleIndx];
  
    if(middleElem===key) return true;
    else if(middleElem<key && numArray.length>1){
      return binarySearch(numArray.splice(middleIndx, numArray.length), key);
    }else if(middleElem>key && numArray.length>1){
      return binarySearch(numArray.splice(0, middleIndx), key);
    }
    else return false;
  }
  
  console.log(binarySearch([5,7,12,16,36,39,42,56,71],68));