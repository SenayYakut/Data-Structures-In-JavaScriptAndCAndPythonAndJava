/*
Given a year, return the century it is in. The first century spans from the year 1 up to and including the year 100, the second-from the year 101 up to and including the year 200, etc.
*/
function centuryFromYear(year){
    let century=0;
    if(year%100===0){
        century += year/100;
    }else{
        century +=Math.floor(year/100)+1;
    }
    return century;
}
console.log(centuryFromYear(1700));//17
console.log(centuryFromYear(1905));//

