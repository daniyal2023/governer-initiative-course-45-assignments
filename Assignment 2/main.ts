// Assignment # 2

//Storing a person name in a variable

let personName:string = "Syed Daniyal Akhtar"; 

//printing person name in lowercase

console.log("Lowercase:", personName.toLowerCase());

//printing person name in uppercase

console.log("Uppercase:", personName.toUpperCase());

//printing person name in titlecase

console.log("Titlecase:", personName.replace(/\bw/g,c=> c. toUpperCase()));