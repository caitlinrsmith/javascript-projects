// let num = 1001;

//Returns 'undefined'.

// console.log(num.length);

//Use type conversion to print the length (number of digits) of an integer.

// let str = num.toString();

// console.log(num); // 24
// console.log(str); // "24"
// console.log(typeof str);
// console.log(str.length);

//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

// let dec = 123.45;

// let stri = dec.toString();

// console.log(dec); // 24
// console.log(stri); // "24"
// console.log(typeof stri);
// console.log(stri.length);
// let numLength = stri.length;
// numLength -= 1;
// console.log(numLength);

//Experiment! What if num could be EITHER an integer or a string?  Add an if/else statement so your code can handle both cases.

// let either = "123456";
// console.log(typeof either);

// if (typeof either === "number") {
//   console.log(Number(either));
//   let text = either.toString();
//   console.log(typeof text);
//   console.log(text.length);
// } else {
//   console.log(either.length);
// }

//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.

let num = 123456789;

if (num % 1 == 0) {
  let text = num.toString();
  console.log(typeof text);
  console.log(text.length);
} else {
  let text = num.toString();
  console.log(typeof text);
  let numLength = text.length;
  numLength -= 1;
  console.log(numLength);
}
