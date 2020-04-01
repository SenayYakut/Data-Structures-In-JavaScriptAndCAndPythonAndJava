/*
Given a string, replace each its character by the next one in the English alphabet(z would be replaced by a)
HINT:
split()
indexOf()
join()


function alphabeticShift(str){
    const alphabet=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    var shiftedStr=str.split("");
    for(let i=0; i<shiftedStr.length; i++){
        let index=0;
        if(shiftedStr[i] !== "z"){
        index=alphabet.indexOf(shiftedStr[i])+1; 
        }
        shiftedStr[i]=alphabet[index]; 
    }  
    return shiftedStr.join("");
}
console.log(alphabeticShift("crazy"));//dsb
*/
// Another way creating an object, dictionary and this is much faster
function alphabeticShift(str){
    const alphabet={"a":"b","b":"c","c":"d","d":"e","e":"f","f":"g","g":"h","h":"i","i":"j","j":"k","k":"l","l":"m","m":"n",
    "n":"o","o":"p","p":"q","q":"r","r":"s","s":"t","t":"u","u":"v","v":"w","w":"x","x":"y","y":"z","z":"a"};
    var shiftedStr=str.split("");
    for(let i=0; i<shiftedStr.length; i++){
        shiftedStr[i]=alphabet[shiftedStr[i]];
        }
      
    return shiftedStr.join("");
}
console.log(alphabeticShift("crazy"));//dsbaz
console.log(alphabeticShift("senay"));//tfobz
