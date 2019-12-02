const Intcode = require("./day2part2");
const PUZZLE_INPUT = require("./puzzleInput");

describe("Day 2 part 2", () => {
  test("Solve part 2", () => {
    expect(Intcode(PUZZLE_INPUT)).toEqual(19690720);
  });
});
