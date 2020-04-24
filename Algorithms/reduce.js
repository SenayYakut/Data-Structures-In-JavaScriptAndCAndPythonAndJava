/*
//This is a good example how to create an object from an array using reduce() method
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

let countedNames = names.reduce(function (allNames, name) { 
  if (name in allNames) {
    allNames[name]++
  }
  else {
    allNames[name] = 1
  }
      return allNames;
}, {});

// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }
console.log(countedNames);// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }

let flattened=[[0,1],[2,3],[4,5],[6,7]].reduce((accumulator, currentValue)=>{
    return accumulator.concat(currentValue);
},[]);
console.log(flattened);//[0,1,2,3,4,5,6,7]s

//Grouping objects by property
let people = [
    { name: 'Alice', age: 21 },
    { name: 'Max', age: 20 },
    { name: 'Jane', age: 20 }
  ];

  function groupBy(objectArray, property){
    return objectArray.reduce((acc,obj)=>{
        let key=obj[property]
        if(!acc[key]){
            acc[key]=[]
        }
        acc[key].push(obj)
        return acc;
    },{});
  }
  let groupedPeople = groupBy(people, 'age');
  console.log(groupedPeople);{ 
    //   20: [
    //     { name: 'Max', age: 20 }, 
    //     { name: 'Jane', age: 20 }
    //   ], 
    //   21: [{ name: 'Alice', age: 21 }] 
    // }
    HINTS:
    reduce()
    initialValue;


    //You have an array of objects which represent your friends, their names, ages and their favaroute books, Write a program which will return all of the books of your friends
    let friends = [{
        name: 'Anna',
        books: ['Bible', 'Harry Potter'],
        age: 21
      }, {
        name: 'Bob',
        books: ['War and peace', 'Romeo and Juliet'],
        age: 26
      }, {
        name: 'Alice',
        books: ['The Lord of the Rings', 'The Shining'],
        age: 18
      }];

      let allBooks=friends.reduce((accumulator, currentValue)=>{
            return[...accumulator, ...currentValue.books]
      },["Alphabet"]);
      console.log("allBooks="+allBooks+".");

//Write a program which will remove all of the duplicates in a given array and will return a new array which only includes unique characters;
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd'];
let myUniqueArray=myArray.reduce(function(accumulator, currentValue){
    if(accumulator.indexOf(currentValue)===-1){
        accumulator.push(currentValue);
    }
    return accumulator;
},[]);
console.log(myUniqueArray);
*/
//Write a program which will return doubled Positive integers in a given array with most efficient way
const numbers = [-5, 6, 2, 0,];
const doubledPositiveNumbers = numbers.reduce((accumulator, currentValue) => {
    if (currentValue > 0) {
      const doubled = currentValue * 2;
      accumulator.push(doubled);
    }
    return accumulator;
  }, []);
  
  console.log(doubledPositiveNumbers);//[12,4]
