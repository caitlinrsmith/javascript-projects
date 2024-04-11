// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
test('should have key called organization with the value of nonprofit', function () {
  expect(launchcode.organization).toBe('nonprofit')
});
  test('should have key called executive director with the value of Jeff', function () {
    expect(launchcode.executiveDirector).toBe('Jeff')
  });
test('should have key called percentageCoolEmployees with value of 100', function() {
  expect(launchcode.percentageCoolEmployees === 100).toBe(true)
});
test('should have key called programsOffered that stores an array of "Web Development", "Data Analysis", "Liftoff"', function() {
  expect(launchcode.programsOffered.length).toBe(3);
  expect(launchcode.programsOffered[0]).toBe('Web Development');
  expect(launchcode.programsOffered[1]).toBe('Data Analysis');
  expect(launchcode.programsOffered[2]).toBe('Liftoff');
});
test(`When passed a number that is ONLY divisible by 2, launchOutput() returns "Launch!"`, function() {
  expect(launchOutput.message).toBe("Launch!");
});
  // test(`Should print 'Rutabagas! That doesn't work.' when num is not divisible by 2, 3, or 5`, function() {
  //   expect(rutabaga).toBe("Rutabagas! That doesn't work.");
  // });

});
