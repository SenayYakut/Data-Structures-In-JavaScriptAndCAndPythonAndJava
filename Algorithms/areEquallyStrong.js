/* Call each arms equally strong if the heaviest weights they each are able to lift are equal
   Call two people equally strong  if their strongest arms equally strong(the strongeest arm can be both the right and left) so are their weakest arms. 
   Given your and your friend's arms' lifting capabilities find out if you two are equally strong 
*/

function areEquallyStrong(yourRight,yourLeft,friendsRight,friendsLeft){
    const yourStrongest=yourLeft>=yourRight ? yourLeft:yourRight;
    const yourWeakest=yourLeft<=yourRight ? yourLeft: yourRight;
    const friendsStrongest=friendsLeft>=friendsRight ? friendsLeft: friendsRight;
    const friendsWeakest=friendsLeft<=friendsRight ? friendsLeft: friendsRight;
    if(yourStrongest===friendsStrongest && yourWeakest===friendsWeakest){
        return true;
    }else{
    return false;
    }
}
console.log(areEquallyStrong(9,11,10,10));//false
console.log(areEquallyStrong(9,1,10,0));//false
console.log(areEquallyStrong(10,11,11,10));//true
console.log(areEquallyStrong(9,12,10,10));//false
console.log(areEquallyStrong(10,15,15,10));//true;


