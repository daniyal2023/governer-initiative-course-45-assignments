//Assignment 32, Checking Usernames

//• Make a list of five or more usernames called current_users.
let current_users : string[] = ["Ahmed" , "Abdul Wajid" , "Daniyal" , "Baseer" , "Abdur Rehman"];

//• Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
let new_users : string[] = ["Daniyal" , "Moosa" , "Ahmed" , "Huzaifa" , "Awais"];

//• Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
new_users.forEach(newUsers => {
    if (current_users.some(currentUsers => currentUsers.toLowerCase() === newUsers.toLowerCase()))
        {
        console.log(`${newUsers} already exist, enter a new username.`)
    } else {
        console.log("Username is available.");       
    }
});