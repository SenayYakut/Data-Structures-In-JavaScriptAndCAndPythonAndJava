/*
Each day a plant growing by upSpeed meters. Each night that plant's height decreases by downSpeed meters due to lack of sun heat. Initially, the plant is 0 meters tall. We plant the seed at the beginning of the day.
We want to know when the height of the plant will reach a certain level.
*/

function growingPlant(upSpeed, downSpeed, desiredHeight){
    let days=0;
    let totalHeight=0;

    while(totalHeight<desiredHeight){
        days++;
        totalHeight+=upSpeed;
        if(totalHeight<desiredHeight){
            totalHeight-=downSpeed;
        }
    }

    return days;
}
console.log(growingPlant(100,10,910));//10
console.log(growingPlant(100,10,10));//1
