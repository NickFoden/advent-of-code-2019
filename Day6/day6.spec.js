const day6 = require("./day6");
const DATA = require("./input");

const TEST_DATA = [
  "COM)B",
  "B)C",
  "C)D",
  "D)E",
  "E)F",
  "B)G",
  "G)H",
  "D)I",
  "E)J",
  "J)K",
  "K)L"
];

describe("Day 6", () => {
  test("test data", () => {
    expect(day6(TEST_DATA)).toEqual(42);
  });
  xtest("Final test", () => {
    expect(day6(DATA)).toEqual("answer");
  });
});
