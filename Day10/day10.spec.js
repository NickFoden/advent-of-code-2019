const day10 = require("./day10");
const DATA = require("./input");

const TEST_DATA = [];

describe("Day 10", () => {
  xtest("test data", () => {
    expect(day10(TEST_DATA)).toEqual(42);
  });
  xtest("Final test", () => {
    expect(day10(DATA)).toBe("?");
  });
});
