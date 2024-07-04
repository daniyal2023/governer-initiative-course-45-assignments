"use strict";
// Assignment 30, Hello Admin 
// Make a array of five or more usernames
let usernames = ["Daniyal", "Admin", "Muneeb", "Rayan", "Kashan"];
usernames.forEach(username => {
    if (username === "Admin") {
        console.log("Hello Admin, would you like to see a status report?");
    }
    else {
        console.log(`Hello ${username}, thank you for logging in again.`);
    }
    ;
});
