//Assignment 26, Alien color 2

//Create a variable of alien's color
let alienColor:string = "green";

//Version that runs if statement

if (alienColor === "green"){
    console.log("Player just earned 5 points for shooting the alien.");  
} else {
    console.log("Player just earned 10 points for shooting the alien.");  
};

//Version that runs else statement
alienColor = "red";

if (alienColor === "green"){
    console.log("Player just earned 5 points for shooting the alien.");  
} else {
    console.log("Player just earned 10 points for shooting the alien.");  
};
