// Greedy approach to solve maxStockProfit Algorith
//Greedy approach doesnt work always but still is the best approach runtime is O(N) Linear
function maxStockProfit(arr){
    var maxProfit=0;
    var buyPrice=arr[0];
    
  
    for(var i=1; i<arr.length; i++){
      var sellPrice=arr[i];
    if(sellPrice<buyPrice){
      buyPrice=arr[i];
    }
    var tempProfit=sellPrice-buyPrice;
    if(tempProfit>maxProfit) maxProfit=tempProfit;
    }
    return maxProfit;
  }
  
  console.log(maxStockProfit([4,7,9,2,3]));
  console.log(maxStockProfit([10, 18, 4, 5, 9, 6, 16, 12]));
  