/*
Given a rectangular matrix and an integer column, return an array containing the elements of columnth of the given matrix(the left most column is the 0th one)
HINT:
push()
*/

function extractMatrixColumn(matrix,column){
    let elements=[];
    for(let i=0; i<matrix.length; i++){
        elements.push(matrix[i][column]);
    }
    return elements;
}
console.log(extractMatrixColumn([[1,1,1,2],[0,5,0,4],[2,1,3,6]],2));//[1,0,3]
console.log(extractMatrixColumn([[1,1,1,0],[0,5,1,6],[2,1,1,4]],2));//[1,1,1]
