// Assignment # 3

//Storing a person name in a variable

let personName:string = "Syed Daniyal Akhtar"; 

//printing person name in lowercase

console.log("Lowercase:", personName.toLowerCase());

//printing person name in uppercase

console.log("Uppercase:", personName.toUpperCase());

//printing person name in titlecase

let titleCase:string[] = personName.split(" ");

let titleCaseName:string = "";

for (let i = 0; i < titleCase.length; i++) {
    titleCaseName += titleCase[i].charAt(0).toUpperCase() + titleCase[i].slice(1).toLowerCase() + " " ;
}

console.log("Tittle-case : " + titleCaseName);