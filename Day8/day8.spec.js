const day8 = require("./day8");
const DATA = require("./input");

const TEST_DATA = [];

describe("Day 8", () => {
  test("test data", () => {
    console.log(DATA);
    expect(day8(TEST_DATA)).toEqual(42);
  });
  xtest("Final test", () => {
    expect(day8(DATA)).toBe("?");
  });
});
