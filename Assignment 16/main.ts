//Assignment 16

//continue with the program of exercise 15

let guestNames:string[] = ["Aliyan", "Rafay" , "Muhammad" , "Kashan" , "Musab" , "Maaz"]; 

let cannotAttend : string = "Muhammad";
console.log(`${cannotAttend}, connot attend dinner tommorow.`);

let newGuest: string = "Rohan";

guestNames [guestNames.indexOf(cannotAttend)] = newGuest

//print the message that you got bigger table
console.log("Great news! I just got a big table for dinner.");

//add new guest at the start of array
guestNames.unshift("Rayan");

//add new guest in the middle of the array
guestNames.splice(Math.floor(guestNames.length / 2 ), 0 , "Muneeb" );

//Now add a guest at the end of your array
guestNames.push("Taheer");

//print the invitation message for each guest
guestNames.forEach(guests => {
    console.log(`Asallam o alaikum ! ${guests}  you are invited for dinner tommorow. `)
})