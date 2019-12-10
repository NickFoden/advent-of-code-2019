const day8 = require("./day8");
const DATA = require("./input");
const TEST_DATA = "123456789012";

describe("Day 8", () => {
  test("test data", () => {
    expect(day8(TEST_DATA, 3, 2)).toEqual(1);
  });
  xtest("Final test", () => {
    expect(day8(DATA, 25, 6)).toBe("?");
  });
});
