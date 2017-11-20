function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 1.8) + 32
}

let fahrenheit

// Monday

const mondayTemperature = 24
console.log(`On Monday it is ${mondayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(mondayTemperature)
console.log(`The Americans would think of that as ${fahrenheit}°F`)

// Tuesday

const tuesdayTemperature = 31
console.log(`On Tuesday it is ${tuesdayTemperature}°C`)
fahrenheit = convertCelsiusToFahrenheit(tuesdayTemperature)
console.log(`The Americans would think of that as ${fahrenheit}°F`)

/*

Challenges:
1. Add Fahrenheit to Celsius converter (`function convertFahrenheitToCelsius`) with examples of usage
2. Add `formatCelsius` function that rounds to whole number using `Math.round`, and adds '°C' on end
3. Add `hottestTemperature` function, which takes an array of temperatures, and returns the highest one

*/

// Challenge 1

function convertFahrenheitToCelsius(fahrenheit) {
  return (fahrenheit - 32) / 1.8
}

const newmondayTemperature = 107
console.log(`On Monday it is ${newmondayTemperature}°F`)
celsius = convertFahrenheitToCelsius(mondayTemperature)
console.log(`All the proper people read it as ${celsius}°C`)

// Challenge 2

function formatCelsius(celsius) {
  return `${Math.round(celsius)}°C`
}

const newestmondayTemperature = 107
console.log(`On Monday it is ${newestmondayTemperature}°F`)
celsius = convertCelsiusToFahrenheit(mondayTemperature)
output = formatCelsius(celsius)
console.log(`All the proper people read it as ${output}`)

// Challenge 3

var tempArray = [
  24,
  37,
  12,
  40,
  57,
];

function hottestTemperature(tempArray) {
  result = tempArray.sort(function(a, b){return b - a});
  return result[0]
}
console.log(hottestTemperature(tempArray))
