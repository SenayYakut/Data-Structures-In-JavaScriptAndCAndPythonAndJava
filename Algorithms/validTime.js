/*
Check if the given string is correct time representation of the 24-hour clock.
HINTS
parseInt()
split()
*/

function validTime(time){
    const timeStr = time.split("");
    if(timeStr.length!==5){
        return false;
    }
    for(let i = 0; i < timeStr.length; i++){
        if(timeStr[0]<=2 && timeStr[0]>=0 && timeStr[1]>=0 && timeStr[1]<=4 && timeStr[2]==":" && timeStr[3]>=0 && timeStr[3]<=6 && timeStr[4]>=0 && timeStr[4]<=9){
                return true;
        }
    }
return false;  
}
console.log(validTime("13:45"));//true
console.log(validTime("25:51"));//false
console.log(validTime("02:76"));//false