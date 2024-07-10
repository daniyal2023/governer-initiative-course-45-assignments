//Assignment 40, Album

//Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.

//create fuction make_album
function make_album( artistName : string, albumTitle : string, tracks?:number ){
    let album:{
        artistName : string,
        albumTitle : string,
        tracks? : number
    } = {
         artistName ,
         albumTitle 
        };
    if(tracks !== undefined){
        album.tracks = tracks;
    }
    return album
}

//make 3 different dictionaries to represent different albums
let album1 = make_album("Atif Aslam" , "Mre Kahani");
let album2 = make_album("Ali Zafar" , "Hey Bro")
let album3 = make_album("Fawad Khan" , "Irtiqa" , 13)

// print the each returned value to check that infromation is stored correctly
console.log(album1);
console.log(album2);
console.log(album3);
