/*
You are implementing your own HTML editor. To make it more comfortable for developers you would like to add an auto completion feature to it.
Given the starting HTML tag, find the appropriate end tag which your editor should propose.
If you arent familiar with HTML, consult with this note.
HINTS:
split()
toString()

//Solution 1 this works but not the perfect solution
function htmlEndTagByStartTag(tag){
    let endTag=tag.split(" ");
    endTag=endTag[0].toString().split("");
    endTag.shift("<")
    endTag.unshift("</");
    if(endTag[endTag.length-1]!==">"){
    endTag.push(">");
    }
    return endTag.join("");

}
console.log(htmlEndTagByStartTag("<i>"));//</i>
console.log(htmlEndTagByStartTag("<button type='button' disabled>"));//</button>
console.log(htmlEndTagByStartTag("<html>"));//</html>
*/
//Solution 2
function htmlEndTagByStartTag(openingTag){
    let openingTagArr=openingTag.split(" ");
    openingTagArr=openingTagArr[0].toString().split("");
    let endingTag="</";
    for(let i=1; i<openingTagArr.length; i++){
        endingTag += openingTagArr[i];
    }

    endingTag = endingTag[endingTag.length-1]===">"? endingTag:endingTag+=">";
    return endingTag;  
}
console.log(htmlEndTagByStartTag("<i>"));//</i>
console.log(htmlEndTagByStartTag("<button type='button' disabled>"));//</button>
console.log(htmlEndTagByStartTag("<html>"));//</html>