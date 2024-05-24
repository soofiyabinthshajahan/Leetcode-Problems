const { checkDestination } = require(".");

test("canary", () => {
  expect(true).toBe(true);
});



test("should find the destination city", () => {
  expect(
    checkDestination([
      ["Lima", "Sao Paulo"],
      ["London", "New York"],
      ["New York", "Lima"],
    ])
  ).toBe("Sao Paulo");
});
