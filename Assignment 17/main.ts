//Assignment : 17 , Shrinking list

//continue with the program of exercise 16

let guestNames:string[] = ["Aliyan", "Rafay" , "Muhammad" , "Kashan" , "Musab" , "Maaz"]; 

let cannotAttend : string = "Muhammad";
//console.log(`${cannotAttend}, connot attend dinner tommorow.`);

let newGuest: string = "Rohan";

guestNames [guestNames.indexOf(cannotAttend)] = newGuest

//console.log("Great news! I just got a big table for dinner.");

guestNames.unshift("Rayan");

guestNames.splice(Math.floor(guestNames.length / 2 ), 0 , "Muneeb" );

guestNames.push("Taheer");

//print the invitation message for each guest
/*guestNames.forEach(guests => {
    console.log(`Asallam o alaikum ! ${guests}  you are invited for dinner tommorow. `)
})*/

//print the message the you can invite only 2 peoples
console.log("Sorry ! I can't arrange the new table on time, so I can only invite 2 guests for the dinner tommorow.");

//remove the guests
while (guestNames.length > 2) {
    let removedGuest : string | undefined = guestNames.pop();
    console.log(`Sorry ! ${removedGuest} I cannot invite you for dinner tommorow.`);
}

//print the message to guests which are still invited
guestNames.forEach(guests => {
    console.log(`Dear ${guests} you are still invited to the dinner tommorow.`)
});

//remove the remaining guests from the arrayn and print the array
guestNames.splice(0 , guestNames.length);
console.log(guestNames);
