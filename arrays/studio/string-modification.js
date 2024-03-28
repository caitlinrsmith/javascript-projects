const input = require("readline-sync");
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.

let firstThree = str.slice(0, 3);
console.log(str);
console.log(firstThree);

let last = str.slice(3);
console.log(last);

let final = last + firstThree;
console.log(final);

//Use a template literal to print the original and modified string in a descriptive phrase.

// This is a scrambled version of Launchcode:

console.log(`This is a scrambled version of ${str}: ${final}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.

let numLetters = input.question("How many letters will be relocated?");

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (numLetters - str.length >= 1) {
  console.log(
    `Problem: Too many letters. We will move three letters instead. \n${final}`
  );
} else if (numLetters - str.length == 0) {
  console.log(`Ta-Da! You found "LaunchCode!`);
} else if (numLetters - str.length < 0) {
  let moving = str.slice(0, numLetters);
  let moving2 = str.slice(numLetters);
  console.log(`"${moving2 + moving}". Too few, guess again.`);
} else {
  console.log("BIG PROBLEM! Enter a valid number.");
}
