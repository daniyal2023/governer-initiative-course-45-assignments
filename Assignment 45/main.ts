//Assignment 45, Cars

// Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.

//create a type interfce for object
interface Car {
    manufacturer : string
    modelName : string
    [key : string] : any
};

//create the function
function car (manufacturer:string , modelName:string , ...options:[string , any][]): object {
    let car : Car = {manufacturer , modelName};
    options.forEach(([key , value]) =>  
    car[key] = value
    );
    return car
};

//craete variable and call the function in it
let car1 = car("Suzuki" , "Cultus" , ["color" , "blue"] , ["modelYear" , 2022]);
let car2 = car("Toyota" , "Carolla" , ["color" , "white"] , ["sunroof" , true]);
let car3 = car("Kia" , "Stonic" , ["color" , "grey"] , ["modelYear" , 2023] , ["sunroof" , true] , ["spareWheel" , false ]);

// print the returned values to make sure infromation is stored 
console.log(car1);
console.log(car2);
console.log(car3);