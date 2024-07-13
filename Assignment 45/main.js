"use strict";
//Assignment 45, Cars
;
//create the function
function car(manufacturer, modelName, ...options) {
    let car = { manufacturer, modelName };
    options.forEach(([key, value]) => car[key] = value);
    return car;
}
;
//craete variable and call the function in it
let car1 = car("Suzuki", "Cultus", ["color", "blue"], ["modelYear", 2022]);
let car2 = car("Toyota", "Carolla", ["color", "white"], ["sunroof", true]);
let car3 = car("Kia", "Stonic", ["color", "grey"], ["modelYear", 2023], ["sunroof", true], ["spareWheel", false]);
// print the returned values to make sure infromation is stored 
console.log(car1);
console.log(car2);
console.log(car3);
