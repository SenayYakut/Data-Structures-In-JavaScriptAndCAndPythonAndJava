function mergeSort(arr){
    if(arr.length<2) return arr;
    var middleIndex=Math.floor(arr.length/2);
    var firstHalf=arr.slice(0, middleIndex);
    var secondHalf=arr.slice(middleIndex);
  
    return merge(mergeSort(firstHalf),mergeSort(secondHalf));
  } 
  
  //O(N log N) run time
  function merge(arr1, arr2){
    var result=[];
    while(arr1.length && arr2.length){
      var minElem;
      if(arr1[0]<arr2[0]) minElem=arr1.shift();
      else minElem=arr2.shift();
      result.push(minElem);
    }
    if(arr1.length) result=result.concat(arr1);
    else result= result.concat(arr2);
    return result;
  }
  console.log(mergeSort([1,7,3,8,5,67]));
  console.log(mergeSort([4,3,2,1]));
  console.log(mergeSort([6000, 34,3, 746, 984, 198, 764, 1,9,1,0]));  
  
   