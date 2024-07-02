"use strict";
//Assignment : 24, More conditional tests
//Tests for equality and inequality with strings
let personName = "Daniyal";
// Test #1
console.log("Is personName == 'Daniyal' ? ");
console.log(personName == "Daniyal"); //true
// Test #2
console.log("Is personName === 'daniyal' ? ");
console.log(personName === "daniyal"); //false
// Test #3
console.log("Is personName != 'Daniyal' ");
console.log(personName != "Daniyal"); //flase
// Test #4
console.log("Is personName !== 'daniyal' ");
console.log(personName !== "daniyal"); //true
//Tests using lowercase function
let uppercase = "CULTUS";
let lowercase = "cultus";
// Test #1
console.log("Is uppercase.toLowerCase() === lowercase ?");
console.log(uppercase.toLowerCase() === lowercase); //true
// Test #2
console.log("Is uppercase.toLowerCase() !== lowercase ?");
console.log(uppercase.toLowerCase() !== lowercase); //false
//Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to operaters
let num1 = 12;
let num2 = 20;
//Test #1
console.log("Is num1 == 12 ?");
console.log(num1 == 12); //true
//Test #2
console.log("Is num1 === num2 ?");
console.log(num1 === num2); //false
//Test #3
console.log("Is num1 != num2 ?");
console.log(num1 != num2); //true
//Test #4
console.log("Is num1 !== 12 ?");
console.log(num1 !== 12); //false
//Test #5
console.log("Is num1 > num2 ?");
console.log(num1 > num2); //false
//Test #6
console.log("Is num2 > num1 ?");
console.log(num2 > num1); //true
//Test #7
console.log("Is num2 < num1 ?");
console.log(num2 < num1); //false
//Test #8
console.log("Is num1 < num2 ?");
console.log(num1 < num2); //true
//Test #9
console.log("Is num1 >= num2 ?");
console.log(num1 >= num2); //false
//Test #10
console.log("Is num2 >= num1 ?");
console.log(num2 >= num1); //true
//Test #11
console.log("Is num1 <= num2 ?");
console.log(num1 <= num2); //true
//Test #12
console.log("Is num2 <= num1 ?");
console.log(num2 <= num1); //false
//Tests using "and" and "or" operators
let a = 10;
let b = 20;
let c = 30;
//Test #1
console.log("Is a < b && b < c ?");
console.log(a < b && b < c); //true
//Test #2
console.log("Is a < b && b > c ?");
console.log(a < b && b > c); //false
//Test #3
console.log("Is a < b || c > b ?");
console.log(a < b || c > b); //true
//Test #4
console.log("Is a > b || b > c ?");
console.log(a > b || b > c); //false
//Test whether an item is in a array
let array1 = [1, 2, 3, 4, 5, 6];
let itemToFind = 4;
console.log("Is '4' present in the array ?");
console.log(array1.indexOf(itemToFind) !== -1); //true
//Test whether an item is not in a array
let array2 = [10, 20, 30, 40];
let item = 15;
console.log("Is '15' not present in the array ?");
console.log(array1.indexOf(item) === -1); //true
