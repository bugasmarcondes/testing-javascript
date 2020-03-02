const { sum, subtract } = require("./math");

let result, expected;

result = sum(3, 7);
// 1. throws an error
// expected = -10;
expected = 10;
expect(result).toBe(expected);

result = subtract(7, 3);
expected = 4;
expect(result).toBe(expected);

// in this way only one test runs, because as soon as it happens, it throws an error
function expect(actual) {
  return {
    toBe(expected) {
      if (actual !== expected) {
        throw new Error(`${actual} is not equal to ${expected}`);
      }
    },
    toEqual(expected) {},
    toBeGreaterThan(expected) {}
  };
}
