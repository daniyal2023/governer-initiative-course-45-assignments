//Assignment no. 15

//continue with the array of exercise 14
let guestNames: string[] = ["Aliyan" , "Rafay" , "Muhammad" , "Kashan" , "Musab" , "Maaz"];

//store the guest name which could not attend the dinner in a new variable
let cannotAttend : string = "Muhammad";
console.log(`${cannotAttend}, connot attend dinner tommorow.`);

//Now add a new guest
let newGuest: string = "Rohan";

//now replace the previous guest with the new one using indexOf()
guestNames [guestNames.indexOf(cannotAttend)] = newGuest;

//print the names with the invitation message
guestNames.forEach(guests => {
    console.log(`Asallam o alaikum ! ${guests} would you like to come to my house for dinner tommorow ?`)
});


