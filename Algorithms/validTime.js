/*
Check if the given string is correct time representation of the 24-hour clock.
HINTS
parseInt()
split()

//Solution 1;
function validTime(time){
    const timeStr = time.split("");
    if(timeStr.length!==5){
        return false;
    }
    for(let i = 0; i < timeStr.length; i++){
        if(timeStr[0]<=2 && timeStr[0]>=0){
            if(timeStr[1]>=0 && timeStr[1]<4){
                if(timeStr[2]==":"){
                    if(timeStr[3]>=0 && timeStr[3]<=6){
                        if(timeStr[4]>=0 && timeStr[4]<=9){
                            return true;
                        }
                    }
                }
            }        
        }
    }
    return false;
}
console.log(validTime("13:45"));//true
console.log(validTime("25:51"));//false
console.log(validTime("02:76"));//false
console.log(validTime("24:00"));//false
console.log(validTime("00:06"));//true;
*/
//Solution 2
function validTime(time){
    const timeStr = time.split(":");
    if(parseInt(timeStr[0])<0 || parseInt(timeStr[0])>23){
        return false;
    }
    if(parseInt(timeStr[1])>59 || parseInt(timeStr[1])<0){
        return false;
    }
     
    return true;
}
console.log(validTime("13:45"));//true
console.log(validTime("25:51"));//false
console.log(validTime("02:76"));//false
console.log(validTime("24:00"));//false
console.log(validTime("00:06"));//true;