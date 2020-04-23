/*
You have deposited a specific amount of dollars into your bank account. Each year your balance increases at the same growth rate. Find out how long it would take your balance to pass a specific threshold with the assumption that you dont make any additional deposits.
*/

function depositProfit(deposit, rate, threshold){
    let year=0;
    while(deposit<threshold){
        deposit += deposit * rate/100;
        year++;
    }
    return year;
}
console.log(depositProfit(100,20,170));//3
console.log(depositProfit(100,20,100));//0
console.log(depositProfit(100,20,190));//4

