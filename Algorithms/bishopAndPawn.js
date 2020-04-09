/*
    Given the position of a white bishop and a black pawn on the standard chess board, determine whether the bishop can capture the pawn in one move.
    The bishop has no restrictions in distance for each move, but is limited to diagonal movement. 

    HINT:
    parseInt()
*/
//There is a pattern here so if bishopX and Y cordinates is equal to Pawn X and Y cordinates in total or opposite. it should be able to capture.

function bishopAndPawn(bishop, pawn){
    const board={
        "a":1,
        "b":2,
        "c":3,
        "d":4,
        "e":5,
        "f":6,
        "g":7,
        "h":8
    }
    const bishopX=board[bishop[0]];
    const bishopY=parseInt(bishop[1]);
    const pawnX=board[pawn[0]];
    const pawnY=parseInt(pawn[1]);

    if(bishopX+bishopY===pawnX+pawnY || bishopX+pawnY===bishopY+pawnX){
        return true;
    }
    return false;
}
console.log(bishopAndPawn("a1","c3"));//true
console.log(bishopAndPawn("b2","b6"));//false










