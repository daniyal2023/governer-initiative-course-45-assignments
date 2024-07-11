//Assignment 44, Sandwiches

// Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered.
function make_sandwich(...items : string[]){
    console.log(`The sandwich has the following items :  ${items}`);
};


// Call the function three times, using a different number of arguments each time.
make_sandwich("Mango jam");
make_sandwich("Chicken" , " Mayonise" , " Capsicum");
make_sandwich("Shami kabab" , " Lettuce" , " Toamto" , " Ketchup");
