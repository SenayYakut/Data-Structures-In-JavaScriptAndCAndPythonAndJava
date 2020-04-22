/*
Given a rectangular matrix and integers a and b, consider the union of the ath row and the bth(both 0-based) column of then matrix(all cells that belong either to the ath row or to the bth column, or to both).Return sum of the elemnts of that union.
HINTS:
reduce()
*/
function crossingSum(matrix, a,b){
    let columnTotal= matrix[a].reduce((a, b) => a+b);
    let rowTotal=0;
    for(let i=0; i<matrix.length; i++){
        rowTotal+= i!==a ? matrix[i][b]:0;
    }
    return columnTotal+rowTotal;
}
console.log(crossingSum([[1,1,1,1],[2,2,2,2],[3,3,3,3]],1,3));//12
console.log(crossingSum([[1,1,1,1],[2,2,2,2],[3,3,3,3],[4,4,4,4]],1,3));//16

