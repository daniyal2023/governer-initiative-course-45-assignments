"use strict";
//Assignment 35, Animals
//strore animal name in an array
let animals = ["Cat", "Dog", "Rabbit"];
//use for loop to print the name of each animal
for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}
;
//Modify the program to print a statement about each animal
for (let i = 0; i < animals.length; i++) {
    console.log(`A ${animals[i]} is a very friendly animal.`);
}
;
//Add a line at the end of the program stating what these animals have in common.
console.log("\n Any these animals are suitable to make a great pet.");
