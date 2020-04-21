/*
The algorithm to convert from Celsius to Fahrenheit is the temperature in Celsius times 9/5, plus 32.

You are given a variable celcius representing a temprature in Celsius. Use the variable fahrenheit already defined and assign it the Fahreheit temprature equvalnt to the given Celcius temperature. Use the algorithm mentioned above to help convert the Celcius temperature  to Fahrenheit.
*/

function convertCelsiusToFahrenheit(celsius){
    const fahrenheit=celsius*(9/5)+32;
    return fahrenheit;
}
console.log(convertCelsiusToFahrenheit(-30));//-22
console.log(convertCelsiusToFahrenheit(-10));//14
console.log(convertCelsiusToFahrenheit(0));//32