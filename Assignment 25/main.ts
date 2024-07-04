//Assignment 25, Alien_color 1

// create a variable of alien color
let alienColor: string = "green";

// 1st version of program

// Write an if statement to test whether the alien’s color is green or not
if (alienColor === "green"){
    console.log("player just earned 5 points.")
}

//version that fails
alienColor = "yellow";

if (alienColor === "green"){
    console.log("player just earned 5 points.")
}
