/*
One night you go for a ride on your motorcycle. At 00:00 you start your engine, and the built-in timer automaticly begins counting the length of your ride, in minutes. Off you go to explore the neighborhood.
When you finaly decide to head back, you reailize there is a chance the bridges on your route home are up, leaving you stranded! Unfortunately, you dont have your watch on you and dont know what time it is. All you know thanks to the bike's timer is that n minutes have passed since 00:00
Using the bike's timer, calculate the current time. Return an answer as the sum of digits that the digital timer in the format hh:mm would show.
HINTS:
toString()
concat()
split()
parseInt()
reduce()
map()
*/
//Solution 1
function lateRide(n){
let hour=Math.floor(n/60).toString().split("");
let minutes = (n % 60).toString().split("");
let number=hour.concat(minutes);
let digits=0;
for(let i=0; i<number.length; i++){
    digits+=parseInt(number[i]);
}

 return digits;
}
console.log(lateRide(808));//14
console.log(lateRide(240));//4
console.log(lateRide(100));//5

//Solution 2
function lateRide(n){
const hours=Math.floor(n/60);
const minutes=(n%60);
const number=hours.toString().concat(minutes.toString()).split("").map((elem)=>parseInt(elem)).reduce((a,b)=>a+b);
    return number;
}
console.log(lateRide(808));//14
console.log(lateRide(240));//4
console.log(lateRide(100));//5