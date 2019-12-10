const day8 = require("./day8");
const day82 = require("./day8pt2");
const DATA = require("./input");
const TEST_DATA = "123456789012";

describe("Day 8", () => {
  test("test data", () => {
    expect(day8(TEST_DATA, 3, 2)).toEqual(1);
  });
  xtest("Final test", () => {
    expect(day8(DATA, 25, 6)).toBe("?");
  });
  test("Part 2 test", () => {
    expect(day82("0222112222120000", 2, 2)).toStrictEqual(["01", "10"]);
  });
  xtest("Part 2 final", () => {
    expect(day82(DATA, 25, 6)).toStrictEqual("?");
  });
});
