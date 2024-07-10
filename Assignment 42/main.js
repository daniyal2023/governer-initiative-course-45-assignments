"use strict";
// Assignment 42, Great Magicians
// Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
//Start with the copy of program of exercise 41
let magicians = ["Tom", "David", "Harry Potter", "Andrew"];
//create the function to print the name of each magician present in the array
function show_magicians(magicians) {
    magicians.forEach(names => {
        console.log(names);
    });
}
;
//make function called great_magicians
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + " " + "The Great";
    }
    ;
}
;
// call the functions
make_great(magicians);
show_magicians(magicians);
