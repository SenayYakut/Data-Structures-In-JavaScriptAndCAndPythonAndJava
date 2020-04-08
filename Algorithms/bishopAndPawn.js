/*
    Given the position of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.
    The bishop has no restrictions in distance for each move, but is limited to diagonal movement. 

    HINT:
    parseInt()
*/
function bishopAndPawn(bishop, pawn){
    let board={
    "a":1,
    "b":2,
    "c":3,
    "d":4,
    "e":5,
    "f":6,
    "g":7,
    "h":8
    }
    let bishopX=board[bishop[0]];
    let bishopY=parseInt(bishop[1]);
    let pawnX=board[pawn[0]];
    let pawnY=parseInt(pawn[1]);

    if(bishopX+bishopY===pawnX+pawnY || bishopX + pawnY=== bishopY+pawnX){
        return true;
    }
    return false;
}
console.log(bishopAndPawn("a1","c3"));


