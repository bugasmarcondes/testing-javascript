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

async function test(title, callback) {
  try {
    await callback();
    console.log(`✔ ${title}`);
  } catch (error) {
    console.error(`𝘹 ${title}`);
    console.error(error);
  }
}

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
