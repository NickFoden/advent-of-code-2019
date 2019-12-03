const FuelCounterUpper = require("./day1");
const DAY_1_FUEL = require("./data");
const FIRST_ROW = [DAY_1_FUEL[0]];
const SECOND_ROW = [DAY_1_FUEL[1]];
const THIRD_ROW = [DAY_1_FUEL[2]];

describe("Day 1", () => {
  test("For First row", () => {
    expect(FuelCounterUpper(FIRST_ROW)).toEqual(22003);
  });
  test("For second Row", () => {
    expect(FuelCounterUpper(SECOND_ROW)).toEqual(28469);
  });
  test("For Third Row", () => {
    expect(FuelCounterUpper(THIRD_ROW)).toEqual(17233);
  });
  test("For First Three Items", () => {
    expect(FuelCounterUpper([FIRST_ROW, SECOND_ROW, THIRD_ROW])).toEqual(67705);
  });
  test("For a mass of 12, divide by 3 and round down to get 4, then subtract 2 to get 2", () => {
    expect(FuelCounterUpper(["12"])).toEqual(2);
  });
  test("For a mass of 14, dividing by 3 and rounding down still yields 4, so the fuel required is also 2.", () => {
    expect(FuelCounterUpper([14])).toEqual(2);
  });
  test("For a mass of 1969, the fuel required is 654.", () => {
    expect(FuelCounterUpper([1969])).toEqual(654);
  });
  test("For a mass of 100756, the fuel required is 33583.", () => {
    expect(FuelCounterUpper([100756])).toEqual(33583);
  });
  test("To Solve the puzzel.", () => {
    expect(FuelCounterUpper(DAY_1_FUEL)).toEqual(3087896);
  });
});
