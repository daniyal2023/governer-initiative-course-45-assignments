// Assignment 37, Large Shirts

// Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript.
function make_shirt(size:string = "large" , message:string = "I love Typescript."){
    console.log(`Making ${size} size shirt with the message "${message}" on it.`);
};

//Make a large shirt with default message
make_shirt();

//Make a medium shirt with default message
make_shirt("medium");

//Make a custom shirt
make_shirt("small" , "Dive into coding");
