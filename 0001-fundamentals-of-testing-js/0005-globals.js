const { sumAsync, subtractAsync } = require("./math");

test("sumAsync adds numbers assynchronously", async () => {
  const result = await sumAsync(3, 7);
  const expected = 11;
  expect(result).toBe(expected);
});

test("subtractAsync subtracts numbers assynchronously", async () => {
  const result = await subtractAsync(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

// view README.md
