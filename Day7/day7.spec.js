const day7 = require("./day7");
const DATA = require("./input");

const TEST_DATA = [];

describe("Day 7", () => {
  xtest("test data", () => {
    expect(day7(TEST_DATA)).toEqual(42);
  });
  xtest("Final test", () => {
    expect(day7(DATA)).toBe("?");
  });
});
