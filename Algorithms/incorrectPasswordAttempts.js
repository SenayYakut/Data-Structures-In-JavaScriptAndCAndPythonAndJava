/*
One Very important User(VIU) has a Very Confidential Document(VCD) stored in his dropbox account. He doesnt let anyone to see the VCD, especially his roommates who often access to his devices.
Opening the Dropbox mobile app on the VIU's tablet requires a four-digit passcode. To ensure the confidentially of the stored information, the device is locked outof Dropbox after 10 consecutive failed passcode attemts. We need to implement a function that given an array of attemts made throughout the day and the correct passcode checks to see if the device should be locked, 10 or more consecutive failed passcode attemts were made. 

*/
//Solution 1
function incorrectPasswordAttempts(passcode, attempts){
    for(let i=0; i<attempts.length; i++){
        if(attempts[i]===passcode && i<=9){
            return true;
        }else{
            return false;
        }
    }

}
console.log(incorrectPasswordAttempts("1111",["1111","2222","3333","4444","5555","6666","7777","8888","9999","7285","5463","3531","8905","1111"]));//true
console.log(incorrectPasswordAttempts("1111",["2222","3333","4444","5555","6666","7777","8888","9999","7285","5463","3531","8905","1111"]));//false

//Solution 2 
function incorrectPasswordAttempts(passcode, attempts){
    for(let i=0; i<attempts.length; i++){
        return attempts[i]===passcode && i<=9? true:false;
    }
}
console.log(incorrectPasswordAttempts("1111",["1111","2222","3333","4444","5555","6666","7777","8888","9999","7285","5463","3531","8905","1111"]));//true
console.log(incorrectPasswordAttempts("1111",["2222","3333","4444","5555","6666","7777","8888","9999","7285","5463","3531","8905","1111"]));//false