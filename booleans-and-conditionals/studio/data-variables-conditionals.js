// Initialize Variables below

let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount > 7) {
  console.log("Too many astronauts");
}
// add logic below to verify all astronauts are ready

if ((astronautStatus = "ready")) {
  console.log("Astronauts ready");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg > 850000) {
  console.log("Over weight limit");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius > maximumFuelTemp || fuelTempCelsius < minimumFuelTemp) {
  console.log("Fuel temp issues");
} else {
  console.log("Fuel temps looking good");
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel !== 100) {
  console.log("Fuel level not 100%");
} else {
  console.log("Fuel level is good.");
}
// add logic below to verify the weather status is clear

// Verify shuttle launch can proceed based on above conditions

// add logic below to verify the weather status is clear
if ((weatherStatus = "clear")) {
  console.log("Clear skies");
} else {
  console.log("Weather delay");
}

// Verify shuttle launch can proceed based on above conditions
if (
  (astronautStatus =
    "ready" &&
    astronautCount <= 7 &&
    totalMassKg < 850000 &&
    fuelTempCelsius < maximumFuelTemp &&
    fuelTempCelsius > minimumFuelTemp &&
    fuelLevel === 100 &&
    weatherStatus == "clear")
) {
  console.log("All sytems are a go! Initiating space shuttle launch sequence.");
  console.log(
    "-----------------------------------------------------------------------------------------------------"
  );
  console.log("Date: " + date);
  console.log("Time: " + time);
  console.log("Astronaut Count: " + astronautCount);
  console.log("Crew Mass: " + crewMassKg + " kg");
  console.log("Fuel Mass: " + fuelMassKg + " kg");
  console.log("Shuttle Mass: " + shuttleMassKg + " kg");
  console.log("Total Mass: " + totalMassKg + " kg");
  console.log("Fuel Temperature: " + fuelTempCelsius + " °C");
  console.log("Weather Status: " + weatherStatus);
  console.log(
    "-----------------------------------------------------------------------------------------------------"
  );
  console.log("Have a safe trip astronauts");
} else {
  console.log("System error");
}
