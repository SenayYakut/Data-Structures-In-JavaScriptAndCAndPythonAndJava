/*
In Thumbtack, users are able to rate Pros based on their experience working with them. Each rating is an Integer ranging from 1 to 5, and all ratings are averaged to produce a single number rating for any given Pro. Those pros who have a rating lower than a specified threshold are manually reviewed by Thumbtack staff to ensure high quality of service.
You are given a list of ratings for some Pros. Find out which Pros should be manually reviewed.
*/

function ratingThreshold(threshold,ratings){
let review=[];
for(let i = 0; i<ratings.length; i++){
    let total=0;

    for(let j=0; j<ratings[i].length; j++){
        total+=ratings[i][j];
    }
    
    if(total/ratings[i].length<threshold){
        review.push(i);
    }
    
}
    return review;
}

console.log(ratingThreshold(3.5,[[3,4],[3,3,3,4],[4]]));//[1]
console.log(ratingThreshold(4,[[3,4],[3,3,3,4],[4]]));//[0,1]