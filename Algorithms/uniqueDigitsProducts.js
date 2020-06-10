/*
Lets call product(x) the product of x's digits. Given an array of integers a, calculate product(x) for each x in a, and return the number of distinct results.
HINTS:
includes()
push()
toString()
split()
parseInt()
*/
    function uniqueDigitsProducts(a){
    let distinctProducts=[];

    a.toString().split("");
    for(let i=0; i<a.length; i++){
        a[i]=product(a[i]);
        
        if(!distinctProducts.includes(a[i])){
            distinctProducts.push(a[i]);
        }
    }   
       
    function product(x){
        let num = x.toString().split("");
        let product=1;
        for(let i = 0; i< num.length; i++){
            product *= parseInt(num[i]);
        }
        return product;
    }

    return distinctProducts.length;
}


console.log(uniqueDigitsProducts([2,8,121,42,222,23]));//3
console.log(uniqueDigitsProducts([2,8,121,42,222,23,32,67]));//4