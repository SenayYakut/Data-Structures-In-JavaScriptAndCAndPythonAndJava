/*
You work for a company that prints and publishes books. You are responsible for designing the page numbering mechanism in the printer. You know how many digits a printer can print with leftover ink. Now you want to write a function to determine what the last page of the book is that you can number given the current page and numberOfDigits left. A page is considered numbered if it has the full number printed on it
if we are working with page 102 but have ink only for two digits then this page will not be considered numbered.
It is guaranted that you can number the current page, and that you cant number the last one in the book.
HINT:
toSting()
*/

function pageNumberingWithInk(current, numberOfDigits){
    while(numberOfDigits>=current.toString().length){
        numberOfDigits-=current.toString().length;

        if(numberOfDigits>=current.toString().length){
            current++;
        }
    }
    
    return current;
}
console.log(pageNumberingWithInk(21,5));//22
console.log(pageNumberingWithInk(8,4));//10
console.log(pageNumberingWithInk(1,5));//5


