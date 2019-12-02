const fuelCounterUpper = require("./day1part2");
const DAY_1_FUEL = require("./data");

describe("Day 1 part 2", () => {
  test("First Test case with 100756", () => {
    expect(fuelCounterUpper([100756])).toEqual(50346);
  });
  test("Second Test case with 1969 ", () => {
    expect(fuelCounterUpper([1969])).toEqual(966);
  });
  xtest("Solve the Puzzle ", () => {
    expect(fuelCounterUpper(DAY_1_FUEL)).toEqual(" ? ");
  });
});
