//Assignment : 18, Seeing the world

//store places in an array
let places : string[] = ["Paris" , "Swat" , "Maldives" , "London" , "Istanbul"];

//print your array in original order
console.log("Array in original order :" , places);

//print array in alphabetical order without changing original array
console.log("Array in alphabetical order without modifiying original  :" , places.slice().sort());

//Again print the array in original array
console.log("Array in original order :" , places);

//print the array in reverse order without changing original array
console.log("Array in reverse alphabetical order without modifiying original  :" , places.slice().sort().reverse());

//Again print the array in original array
console.log("Array in original order :" , places);

//Now reverse and print the original array in reversed order
places.reverse();
console.log("Original array in reversed order :" , places);

//Now reverse and print the reversed array in to original order
places.reverse();
console.log("Reversed array in original order :" , places);

//now sort and print the original array in alphabetical order
places.sort();
console.log("Original array in alphabetical order :" , places);

//now reverse and print the sorted array in reversed alphabetical order
places.reverse();
console.log("Original array in reversed alphabetical order :" , places);

