/*
Last night you had to study but decided to party instead. Now there is a black and white photo of you that is about to go viral. You cant let this ruin your reputation. so you want to apply box blur algorithm to the photo to hide its content.
The algorithm works as follows each pixel x in the resulting image has a value equal to the average value of the input image pixels values from 3*3 square with the center at x. All pixels at the edges are cropped.
As pixels value as an integer, all fractions should be rounded down.

HINTS:
push()
Math.floor()

Input: Image:[[36,0,18,9],[27,54,9,0],[81,63,72,45]];
Output:[[40,30]];
*/

function boxBlur(image){
    let imageArray=[];

    for(let y=0; y<image.length-2; y++){
        let line=[];
        for(let x=0; x<image[y].length-2; x++){
        let sum=0;
        for(let a=y; a<y+3; a++){
            for(let b=x; b<x+3; b++){
                sum+=image[a][b];
            }
          }
          line.push(Math.floor(sum/9));
        }
        imageArray.push(line);
    }
    return imageArray;
} 
console.log(boxBlur([[36,0,18,9],[27,54,9,0],[81,63,72,45]]));

