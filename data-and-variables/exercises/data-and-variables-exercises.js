// Declare and assign the variables below

// Use console.log to print the 'typeof' each variable. Print one item per line.

// Calculate a space mission below

// Print the results of the space mission calculations below

// Calculate a trip to the moon below

// Print the results of the trip to the moon below

let shuttleName = "Determination";
let shuttleSpeedMph = 17500;
let distanceToMarsKm = 225000000;
let distanceToMoonKm = 38400;
const milesPerKm = 0.621;
let milesToMars = distanceToMarsKm * milesPerKm;
let hoursToMars = milesToMars / shuttleSpeedMph;
let daysToMars = hoursToMars / 24;

let milesToMoon = distanceToMoonKm * milesPerKm;
let hoursToMoon = milesToMoon / shuttleSpeedMph;
let daysToMoon = hoursToMoon / 24;

// my shuttle exercises from chapter 4
// console.log('"' + shuttleName + " will take " + daysToMars + ' days to reach Mars."');
// console.log('"' + shuttleName + " will take " + daysToMoon + ' days to reach the Moon."');
// console.log(typeof shuttleName);
// console.log(typeof shuttleSpeedMph);
// console.log(typeof distanceToMarsKm);
// console.log(typeof distanceToMoonKm);
// console.log(typeof milesPerKm);

// console.log(Boolean("true"));
// console.log(Boolean("TRUE"));
// console.log(Boolean(0));
// console.log(Boolean(1));
// console.log(Boolean(''));
// console.log(Boolean('LaunchCode'));
// console.log(Boolean('     '));

// chapter 5
// let num = 7;

// if (num % 2 === 0) {
//     if (num % 2 === 1) {
//         console.log("odd");
//     }
// }

// let num = 7;

// if (num % 2 === 0) {
//     console.log("EVEN");

//     if (num > 0) {
//         console.log("POSITIVE");
//     }
// }

let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let commandOverride = true;
let fuelLevel = 2100;

// if (crewStatus) {
//     console.log("Crew Ready");
//  } else {
//     console.log("Crew Not Ready");
//  }

//  if (computerStatusCode === 200) {
//     console.log("Please stand by. Computer is rebooting.");
//   } else if (computerStatusCode === 400) {
//     console.log("Success! Computer online.");
//   } else {
//     console.log("ALERT: Computer offline!");
//   }

if (shuttleSpeed > 17500) {
  console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
  console.log("ALERT: Cannot maintain orbit!");
} else {
  console.log("Stable speed");
}

if (
  fuelLevel < 1000 ||
  engineTemperature > 3500 ||
  engineIndicatorLight === "red blinking"
) {
  console.log("ENGINE FAILURE IMMINENT!");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
  console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 5000 || engineTemperature <= 2500) {
  console.log("Fuel level above 25%. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
  console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
  console.log("Full tank level above 25%. Engines good.");
} else {
  console.log("Fuel and engine status pending...");
}

if (
  (fuelLevel > 20000 && !engineIndicatorLight === "red blinking") ||
  commandOverride === true
)
  console.log("Cleared to launch!");
else {
  console.log("Launch scrubbed!");
}
