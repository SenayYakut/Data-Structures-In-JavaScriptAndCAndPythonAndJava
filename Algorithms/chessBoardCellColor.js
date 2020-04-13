/*
Given two cells on the standard chess board, determine whether they have the same color or not.
*/

function chessBoardCellColor(cell1, cell2){
    let board={
        "a":1,
        "b":2,
        "c":3,
        "d":4,
        "e":5,
        "f":6,
        "g":7,
        "h":8
    };
    let total1=(board[cell1[0]]+parseInt(cell1[1]))%2;
    let total2=(board[cell2[0]]+parseInt(cell2[1]))%2;

    return total1===total2;
}
console.log(chessBoardCellColor("a1","c3"));//true
console.log(chessBoardCellColor("a1","h3"));//false

