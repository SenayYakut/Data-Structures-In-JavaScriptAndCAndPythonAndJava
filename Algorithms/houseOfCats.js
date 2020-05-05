/*
There are some people and cats in a house. You are given the number of legs they have all together. Your task is to return an array containing every possible number of people that could be in the house sorted in ascending order. It s guaranteed that each person has 2 legs and each cat has 4 legs. 
*/

function houseOfCats(legs){
    let people=[];

    while(legs>=0){
        people.unshift(legs/2);
        legs-=4;
    }
    return people;
}
console.log(houseOfCats(6));//[1,3]
console.log(houseOfCats(2));//[1]
console.log(houseOfCats(4));//[0,2]