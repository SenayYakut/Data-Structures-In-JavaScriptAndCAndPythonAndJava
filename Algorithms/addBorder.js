/*Given a rectangular matrix of characters, add a border of asterics("*") to it.
input:
picture=["abs","def"];

expected output:
addBoder(picture)=["*****",
                   "*abc*",
                   "*cef*",
                   "*****"]

Hint:
concat()
unshift()
push()
*/

function addBorder(picture){
    let wall="*".repeat(picture[0].length+2);
    picture.push(wall);
    picture.unshift(wall);
    for(let i=1; i<picture.length-1; i++){
       picture[i]= "*".concat(picture[i], "*");
    }
    return picture;
}
console.log(addBorder(["abc","def"]));


