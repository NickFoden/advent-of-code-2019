const manhatDist = require("./day3");
const WIRE_ONE = require("./WireOne");
const WIRE_TWO = require("./WireTwo");
const TEST_ONE_WIRE_ONE = require("./TestData/test1").test1Wire1;
const TEST_ONE_WIRE_TWO = require("./TestData/test1").test1Wire2;
const TEST_TWO_WIRE_ONE = require("./TestData/test2").test1Wire1;
const TEST_TWO_WIRE_TWO = require("./TestData/test2").test1Wire2;

describe("Day 3 part 1", () => {
  test("First Test 2 wires", () => {
    expect(manhatDist(TEST_ONE_WIRE_ONE, TEST_ONE_WIRE_TWO)).toEqual(159);
  });
  test("Second Test 2 wires", () => {
    expect(manhatDist(TEST_TWO_WIRE_ONE, TEST_TWO_WIRE_TWO)).toEqual(135);
  });
  test("Solve part 1", () => {
    expect(manhatDist(WIRE_ONE, WIRE_TWO)).toEqual(2050);
  });
});
