/*
Given an array of numbers of votes given to each of the candidates so far, and an integer k equal to the number of votes who havent cast their vote yet, find the number of candidates who still have a chance to win the election.
The winner of the election must secure strictly more votes than any other candidates. If TWO OR MORE CANDIDATES RECEIVE THE SAME(MAXIMUM) NUMBER OF VOTES, ASSUME there is no winner at all.
HINTS:
sort()
Math.max()
*/

function electionWinners(votes, k){
    votes=votes.sort();
    let len=votes.length;
    const winnerSoFar=votes[len-1];
    let possibleWinners=[];
    for(let i=len-1; i>=0; i--){
        if(votes[i]+k>winnerSoFar){
            possibleWinners.push(votes[i]);   
        }
    }
    return possibleWinners.length;
}
console.log(electionWinners([2,3,5,2,9],3));//1
console.log(electionWinners([2,3,5,2],3));//2
console.log(electionWinners([4,3,5],3));//3
console.log(electionWinners([1,2,5],3));//1


