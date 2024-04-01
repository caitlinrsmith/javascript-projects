//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require("readline-sync");

let fuelLevel;
let numAstronauts;
let altitudeKm = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */
// Prompt the user to enter the starting fuel level.

// The loop should continue until the user enters a positive value greater than 5000 but less than 30000.

while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
  fuelLevel = input.question("What is the starting fuel level?");
}

console.log(`Fuel level is: ${fuelLevel}`);

//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.

while (numAstronauts > 7 || numAstronauts < 1 || isNaN(numAstronauts)) {
  numAstronauts = input.question("What is the number of astronauts?");
}

console.log(`There are ${numAstronauts} astronauts.`);

//c. Use a final loop to monitor the fuel status and the altitude of the shuttle.
// Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.

while (fuelLevel >= 100) {
  fuelLevel = fuelLevel - 100 * numAstronauts;
  altitudeKm = altitudeKm + 50;
}

console.log(`Final fuel level was : ${fuelLevel} gallons.`);

if (altitudeKm >= 2000) {
  console.log(`The shuttle gained an altitude of ${altitudeKm} km.`);
  console.log("Orbit achieved!");
} else {
  console.log(`The shuttle gained an altitude of ${altitudeKm} km.`);
  console.log("Failed to reach orbit.");
}

// CODE IS LOOKING GOOD EXCEPT I AM GETTING NEGATIVE GALLONS!! if i input fuel of 26k and astronauts of 6

// while (fuelLevel > 100) {
//   // altitudeKm + 50;
//   console.log(fuelLevel);
//   fuelLevel - 100 * numAstronauts;
// }

// let i = fuelLevel;

// while (i > 99) {
//   console.log(i);
//   i - 100 * numAstronauts;
// }

// if (altitude >= 2000) {
//   console.log(`The shuttle gained an altitude of ${altitudeKm} km.`);
//   console.log("Orbit achieved!");
// } else {
//   console.log(`The shuttle gained an altitude of ${altitudeKm} km.`);
//   console.log("Failed to reach orbit.");
// }

// code to help me work out what to do inbetween the dashes
// -----------------------------------------------------------------
// for (initial expression; loop condition; update expression) {
//   loop body
// }

// for (let i = 0; i < 51; i++) {
//   console.log(i);
// }

// for (
//   fuelLevel;
//   fuelLevel <= 99;
//   fuelLevel - 100 * numAstronauts && altitudeKm + 50
// ) {
//   if (altitude >= 2000) {
//     console.log(`The shuttle gained an altitude of ${altitudeKm} km.`);
//     console.log("Orbit achieved!");
//   } else {
//     console.log(`The shuttle gained an altitude of ${altitudeKm} km.`);
//     console.log("Failed to reach orbit.");
//   }
// }
// -----------------------------------------------------------------

/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
