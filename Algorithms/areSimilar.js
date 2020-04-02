function areSimilar(a,b){
    if(a.length!==b.length){
    return false;
    }
    for(let i=0; i<a.length; i++){
        if(a[i]!==b[i]){
            b[i]=b[i+1];
            b[i+1]=b[i];
            if(a===b) {
                return true;
            }
        }
    }
    return false;
}
console.log(areSimilar([1,2,3],[1,3,2]));//true
console.log(areSimilar([1,2,2],[2,1,1]));
console.log(areSimilar([1,2,3],[1,3]))//false
console.log(areSimilar([1,2,3,5,4],[1,3,2,4,5]));//false
