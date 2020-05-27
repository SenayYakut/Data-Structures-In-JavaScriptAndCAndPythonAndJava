/*
Your friend advised you to see a new performance in the most popular theater in the city. He knows a lot about art and his advice is usally good. but not this time: the performance turned out to be awfully dull. it is so bad you want to sneak out, which is quite simple, especially since exit is located right behind your row to the left
All you need to do is climb over your seat and make way to exit.

The main problem is your shyness: you are afraid that you will end up blocking the view even if only for a couple of seconds of all the people who sit behind you and in your column or the columns to your left. to gain some courage you decide to calculate the number of such people and see if you can possibly make it to the exit without disturbing too many people.
Given the total number of rows and columns in the theater and the row and columns in the theater and row and column you are sitting in, return the number of people who sit strickly behind you and in your column or to the left, assuming all seats are occupied.

*/

function seatsInTheater(nCols, nRows, col, row){
const area=(nCols-col+1) * (nRows-row);
return area;
}

console.log(seatsInTheater(16,11,5,3));//96