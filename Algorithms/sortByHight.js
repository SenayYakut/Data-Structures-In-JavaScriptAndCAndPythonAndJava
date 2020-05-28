/*
Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is to rearrange the people by their heights in a non-desending orderr without moving the trees.
HINT:
filter()
sort()
*/
//Solution 1
function sortByHeight(a){
    const newArr=[];
    for(let i=0; i<a.length; i++){
        if(a[i]!==-1){
            newArr.push(a[i]);
        }
    }
    newArr.sort((num1, num2) =>{
        return num1-num2;
    });
    
    let index=0;
    for(let i=0; i<a.length; i++){
        if(a[i]!==-1){
            a[i]=newArr[index];
            index++;
        }
    }
    return a;
}
console.log(sortByHeight([-1,150,190,170,-1,-1,160,180]));//[ -1, 150, 160, 170, -1, -1, 180, 190 ] 

//Solution 2

function sortByHeight(a){
    let newArr = a.filter(elem=>{
        if(elem!==-1){
            return elem;
        }
    });

    newArr.sort((num1, num2)=>{
        return num1-num2;
    });
    let index=0;
    for(let i=0; i<a.length; i++){
        if(a[i]!==-1){
            a[i]=newArr[index];
            index++;
        }
    }
    return a;
}
console.log(sortByHeight([-1,150,190,170,-1,-1,160,180]));//[ -1, 150, 160, 170, -1, -1, 180, 190 ] 

