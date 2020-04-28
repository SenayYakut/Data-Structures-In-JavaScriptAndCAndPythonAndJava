/*
Uber is building a Fare Estimator that can tell you how much your ride will cost before you request it. It works by passing approximated ride distance and ride time through this formula.
(Cost per minute)*(ride time)+(Cost per mile)*(ride distance)
where Cost per minute and Cost per mile depend on the car type.

You are one of the engineers building the Fare Estimator, so knowing cost per minute and cost per mile for each car type, as well as the ride distance and ride time, return the fare estimates for all cars types.
HINT:
push()
*/

function fareEstimator(costPerMinute,rideTime,costPerMile,rideDistance){
    let estimateFares=[];
    for(let i=0; i<costPerMinute.length; i++){
        estimateFares.push((costPerMinute[i]*rideTime+costPerMile[i]*rideDistance).toFixed(2));
    }
    return estimateFares;
}
console.log(fareEstimator([0.2,0.35,0.4,0.45],30,[1.1,1.8,2.3,3.5],7));//[ '13.70', '23.10', '28.10', '38.00' ] 

