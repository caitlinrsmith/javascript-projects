/*Exercise #1: Construct for loops that accomplish the following tasks:
    // a. Print the numbers 0 - 20, one number per line. 

    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */

// for (let i = 0; i < 21; i++) {
//   console.log(i);
// }

// for (let i = 3; i < 30; i = i + 2) {
//   console.log(i);
// }

// for (let i = 12; i > -15; i = i - 2) {
//   console.log(i);
// }

// for (let i = 50; i > 19; i--) {
//   if (i % 3 === 0) {
//     console.log(i);
//   }
// }

/*Exercise #2: 
Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

Construct ``for`` loops to accomplish the following tasks:
  a. Print each element of the array to a new line.
  b. Print each character of the string - in reverse order - to a new line. */

// let name = "LaunchCode";
// let arr = [1, 5, "LC101", "blue", 42];

// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// for (let i = 9; i >= 0; i--) {
//   console.log(name[i]);
// }

/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

let nums = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104];
let evens = [];
let odds = [];

for (let i = 0; i < nums.length; i++) {
  if (nums.at(i) % 2 === 1) {
    odds.push(nums[i]);
  } else if (nums.at(i) % 2 === 0) {
    evens.push(nums[i]);
  }
}
console.log(evens);
console.log(odds);

// this code console logs the evens each new number is added onto the evens array
// -------------------------------------------------------------------
// for (let i = 0; i < nums.length; i++) {
//   evens.push(nums[i]);
//   console.log(evens);
// }

// this code console logs the evens and odds arrays as each new number is added onto their corresponding array
// -------------------------------------------------------------------
// for (let i = 0; i < nums.length; i++) {
//   if (nums.at(i) % 2 === 1) {
//     odds.push(nums[i]);
//     console.log(odds);
//   } else if (nums.at(i) % 2 === 0) {
//     evens.push(nums[i]);
//     console.log(evens);
//   }
// }
// -------------------------------------------------------------------

// this code was for me to look at how unshifting onto an array works
// --------------------------------------------------------------------
// let array1 = [1, 2, 3];

// console.log(array1.unshift(4, 5));
// // Expected output: 5

// console.log(array1);
// -------------------------------------------------------------------

// this code was for me to look at how pushing onto an array works
// --------------------------------------------------------------------
// let myArray = [1, 2, 3];
// myArray.push(4);
// console.log(myArray);
// --------------------------------------------------------------------

// these are my other failed attempts at the solving the Node, but essentially first i printed each of the numbers at the index 0,
// then going up by 1 until the end of the Array using.length
// then I tried to obtain the values at those different indexes using .at(i)
// and then I needed to check whether the values of the numbers at the indexes i grab are even or odd by using % 2 === 0 or === 1

// -------------------------------------------------------------------
// for (let i = 0; i < nums.length; i++) {
//   if (nums.at(i) % 2 === 1) odds.push;
//   console.long(evens);
// }

// for (let i = 0; i < nums.length; i++) {
//   if (nums.at(i) % 2 === 1) odds.push;
//   console.log(evens);
// }

// for (let i = 0; i < nums.length; i++) {
//   if (nums.at(i) % 2 === 1) {
//     evens.push();
//     console.log(evens);
//   } else if (nums.at(i) % 2 === 0) {
//     odds.push();
//     console.log(odds);
//   }
// }

// this was one of my first attempts at the odds even push arry code
// --------------------------------------------------------------------
// for (let i = 0; i < nums.length; i++) {
//   if (nums.at(i) % 2 === 1) {
//         console.log(evens);
// }
