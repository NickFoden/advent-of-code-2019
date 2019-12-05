const day5pt2 = require("./day5pt2");
const DATA = require("./input");

describe("Day 5 part 2", () => {
  test("test day 1 functionality", () => {
    expect(day5pt2(["3", "0", "4", "0", "99"], 9)).toEqual("9");
  });
  xtest("Final test day 2", () => {
    expect(day5pt2(DATA)).toEqual("answer");
  });
});
