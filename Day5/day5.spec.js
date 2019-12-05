const day5 = require("./day5");
const DATA = require("./input");

describe("Day 5", () => {
  test("test example with input 2", () => {
    expect(day5(["3", "0", "4", "0", "99"], 2)).toEqual("2");
  });
  xtest("Final test", () => {
    expect(day5(DATA)).toEqual("answer");
  });
});
