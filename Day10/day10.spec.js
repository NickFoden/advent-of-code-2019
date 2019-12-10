const day10 = require("./day10");
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
  xtest("test data", () => {
    expect(day10(TEST_DATA)).toEqual(42);
  });
  xtest("Final test", () => {
    expect(day10(DATA)).toBe("?");
  });
});
