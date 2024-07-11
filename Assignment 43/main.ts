//Assignment 43, Unchanged Magicians

// Start with your work from Exercise 42. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.

//the copy of program of exercise 42
let magicians : string[] = ["Tom" , "David" , "Harry Potter" , "Andrew"];

//create the function to print the name of each magician present in the array
function show_magicians(magicians:string[]){
    magicians.forEach(names => {
        console.log(names);
    });
};

//make function called great_magicians
function make_great(magicians:string[]){
    let greatMagicians : string[] = [];
    magicians.forEach(magician => {
        greatMagicians.push(`${magician} The Great`)
    });
    return greatMagicians
};

//create a copy of array to make magicians great
let greatMagicians = make_great(magicians.slice());

//call the functions
console.log("Original Magicians :");
show_magicians(magicians);
console.log("Great Magicians :");
show_magicians(greatMagicians);