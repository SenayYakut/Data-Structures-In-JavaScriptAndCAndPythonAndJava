/*
Thumbtack helps Professionals (Pros) grow their business by identifying new customers. Upon registering on Thumbtack, a Pro specifies which categories of services they provide. To help match customer requests with qualified Pros, Thumbtack maintains a list of Pros grouped by service categories.

Given a list of pros and their category preferences, return the list of Pros for each category.
HINTS:
hasOwnProperty()
push()
toLowerCase()
sort()
*/

  

function proCategorization(pros, preferences){
let prosPreferences={};
let proPrefs=[];
for(let i=0; i<pros.length; i++){
    for(let j=0; j<preferences[i].length; j++){
        if(prosPreferences.hasOwnProperty([i][j])){
            prosPreferences[preferences[i][j]].push(pros[i]);
        }else{
            prosPreferences[preferences[i][j]]=[pros[i]];
        }
    }
}

for(const prop in prosPreferences){

}
return prosPreferences;
}
console.log(proCategorization(["Jack", "Leon", "Maria"],[[["Computer lessons"], ["Leon", "Maria"]],
[["Computer repair"], ["Jack", "Leon"]],
[["Data recovery service"], ["Leon"]],
[["Handyman"], ["Jack"]],
[["House cleaning"], ["Jack", "Maria"]]]));

