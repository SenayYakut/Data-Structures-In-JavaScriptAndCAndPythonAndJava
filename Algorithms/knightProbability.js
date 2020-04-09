/*
On an NxN chessboard, a knight starts at the r-th row and c-th column and attempts to make exactly K moves. The rows and columns are 0 indexed, so the top-left square is (0, 0), and the bottom-right square is (N-1, N-1).
A chess knight has 8 possible moves it can make, as illustrated below. Each move is two squares in a cardinal direction, then one square in an orthogonal direction.
Each time the knight is to move, it chooses one of eight possible moves uniformly at random (even if the piece would go off the chessboard) and moves there.
The knight continues moving until it has made exactly K moves or has moved off the chessboard. Return the probability that the knight remains on the board after it has stopped moving.
 
*/

//Creating and initializing the array to 0
//Create a 2D Array
let getTwoDArray = function(N) {
    let arr = new Array(N);
    
    for(let i=0; i<N; i++) {
        arr[i] = new Array(N);
    }
    
    for(let i=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            arr[i][j] = 0;
        }
    }
    return arr;
}

var knightProbability = function(N, K, r, c) {
    let dp = getTwoDArray(N);
//DP recursive function;             
    dp[r][c] = 1;
    let dr = [-2,-2,-1,-1,1,2,2,1];
    let dc = [1,-1,-2,2,2,1,-1,-2];
	
    while(K > 0) {
        let dp2 = getTwoDArray(N);
		
        for(let row=0; row<N; row++) {
            for(let col=0; col<N; col++) {
                for(let mov=0; mov < 8; mov++) {
                    let cRow = row + dr[mov];
                    let cCol = col + dc[mov];
                    if(cRow < N && cRow >=0 && cCol < N && cCol >= 0)
                        dp2[cRow][cCol]=dp2[cRow][cCol] + (dp[row][col]/8);
                }
            }
        }
        dp = dp2;
        K = K - 1;
    }
    
    let res = 0.0;
    for(let i=0; i<N; i++) {
        for(let j=0; j<N; j++) {
            res = res + dp[i][j]
        }
    }
    
    return res;
}
console.log(knightProbability(3,2,0,0));//0.0625