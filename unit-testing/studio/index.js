
let launchcode = {

    organization: 'nonprofit',
    executiveDirector: 'Jeff',
    percentageCoolEmployees: 100,
    programsOffered: ["Web Development","Data Analysis","Liftoff"], 
    launchOutput: function (num) {
      let message = "!"
      if (num % 2 === 0) {
          message = "Launch" + message;
      } else if (num % 3 === 0) {
          message = "Code" + message;
      }
      else if (num % 5 === 0) {
          message = "Rocks" + message;
      }
      // } else if (num / 2 === 0 && num / 3 === 0 && num / 5 === 0) {
      //     lcRocks = "";
      //     return
      // }
      return message;
  }
  } 
  
  
  
  
  module.exports = launchcode;

