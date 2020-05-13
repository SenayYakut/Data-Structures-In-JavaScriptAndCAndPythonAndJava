/*
After becoming famaous, CodeBots decided to move to a new building and live together.
The building is represented by a rectangular matrix of rooms, each cell containing an integer- the price of the room. Some rooms are free(their cost is 0), but that is probably because they are haunted, so all the bots are afraid of them. That is why the room that is free or is located anywhere below a free room in the same column is not considered suitable for bots. 
Help the bots calculate the total price of all the rooms that are suitable for them.
HINTS:
push()
indexOf()
*/

function matrixElementsSum(matrix){
    let banned=[];
    let total=0;
    let i = 0;
    let j = 0;
    let k =i+1;

    for(i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
            if(matrix[i][j]===0){
               banned.push(j);
            }
            if(!banned.includes(j)){
                total+=matrix[i][j];
            }
        }
    }
    return total;
    }  
console.log(matrixElementsSum([[0,1,1,2],[0,5,0,0],[2,0,3,3]]));//9
console.log(matrixElementsSum([[0,1,1,2],[0,5,0,0],[2,0,3,3],[1,2,3,4]]));//9

//Solution 2
function matrixElementsSum(matrix){
    let count=0;
    for(let i=0;i<matrix.length;i++){
        for(let j=0;j<matrix[i].length;j++){
            if(matrix[i][j]==0){
                for(let k=i;k<matrix.length;k++){
                    matrix[k][j]=0;
                }
                continue;
            }
            else
                count+=matrix[i][j];
        }
    }
    return count;
}
console.log(matrixElementsSum([[0,1,1,2],[0,5,0,0],[2,0,3,3]]));//9
console.log(matrixElementsSum([[0,1,1,2],[0,5,0,0],[2,0,3,3],[1,2,3,4]]));//9

