//Assignmnet 33, Ordinal Numbers

//• Store the numbers 1 through 9 in a array.
let ordinalNunbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// • Loop through the array.

// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
ordinalNunbers.forEach(numbers => {
    let ordinalEnding: string = "th"
    if (numbers === 1){
        ordinalEnding = "st"
    } else if (numbers === 2){
        ordinalEnding = "nd"
    } else if (numbers === 3){
        ordinalEnding = "rd"
    }
    console.log(`${numbers}${ordinalEnding}`)
});