/*
The master launch sequence consists of several independent sequences for different systems. Your goal is to verify that all the individual system sequences are in strickly increasing order. In other
words, for any two elements i and j (i<j) of the master launch sequence that belong to the same system(having systemNames[i]=systemNames[j]), heir values should be in strickly increasing order. 
(stepNumbers[i]<stepNumber[j]).
*/
//Solution 1
function launchSequenceChecker(systemNames, stepNumbers){
    if(stepNumbers.length%2!==0 || systemNames.length%2!==0){ 
        return false;
    }

    const half=stepNumbers.length/2;
    let i=0;
    let j = half; 
    if(systemNames[i]===systemNames[j]){  
        for(i<half; j<stepNumbers.length;){
            if(stepNumbers[i]<stepNumbers[j]){
            return true;   
            i++;
            j++;
            }else{
            return false;
            }
        }     
    } 
 return false;
}
console.log(launchSequenceChecker(["stage_1","stage_2","dragon","stage_1","stage_2","dragon"],[1,10,11,2,12,111]));//true;
console.log(launchSequenceChecker(["Uranus","Neptun","Mars","Uranus","Neptune","Mars"],[2,10,11,2,12,111]));//false
console.log(launchSequenceChecker(["stage_1","stage_2","dragon","stage_1","stage_2"],[10,11,2,12,111]));//false


