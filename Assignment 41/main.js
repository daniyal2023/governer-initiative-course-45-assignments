"use strict";
//Assignment 41, Magicians
//create the array of magician's name
let magicians = ["Tom", "David", "Harry Potter", "Andrew"];
//create the function to print the name of each magician present in the array
function show_magicians() {
    magicians.forEach(names => {
        console.log(names);
    });
}
;
//call the fuction
show_magicians();
