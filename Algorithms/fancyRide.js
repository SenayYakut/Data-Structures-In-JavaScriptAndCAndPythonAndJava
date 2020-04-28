/*
Being a new Uber user, you have $20 off your first ride. You want to make  the most out of it and drive in the fanciest car you can afford, without spending any out of pocket money.
There are 5 options, from least to most expensive. "UberX","UberXL","UberPlus","UberBlack" and "UberSUV".
You know the length I of your ride in miles and how much one mile costs for each car. Find the best car you can afford.
*/
//Solution1
const options=["UberX","UberXL","UberPlus","UberBlack","UberSUV"];
const fares=[0.3,0.5,0.7,1,1.3];

function fancyRide(I,fares){
    for(let i=0; i<fares.length; i++){
        if(fares[i] * I<=20)
        bestOption=options[i];
    }
    return bestOption;
}
console.log(fancyRide(30,fares));//UberXL
console.log(fancyRide(20,fares));//UberBlack

