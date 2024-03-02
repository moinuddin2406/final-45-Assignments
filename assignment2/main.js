"use strict";
// Storing a person's name in a variable
let personName = "moinuddin";
// Printing person's name in lowercase
console.log("Lowercase:", personName.toLowerCase());
// Printing person's name in uppercase
console.log("Uppercase:", personName.toUpperCase());
// Printing person's name in title case
console.log(personName.replace(/\b\w/g, char => char.toUpperCase()));
