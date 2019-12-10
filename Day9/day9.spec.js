const day9 = require("./day9");
const DATA = require("./input");

const TEST_DATA = [];

describe("Day 6", () => {
  xtest("test data", () => {
    expect(day9(TEST_DATA)).toEqual(42);
  });
  xtest("Final test", () => {
    expect(day9(DATA)).toBe("?");
  });
});
