const { test, expect } = require("@jest/globals");
const Manager = require("../lib/Manager");

test("creates Manager object with office number property", () => {
  const manager = new Manager(
    "Casey Adam Deriso",
    1,
    "caseyderiso@gmail.com",
    "281-330-8004"
  );

  expect(manager.officeNumber).toEqual("281-330-8004");
});

test("getRole() overrides employee method to return Manager as a string", () => {
  const manager = new Manager(
    "Casey Adam Deriso",
    1,
    "caseyderiso@gmail.com",
    "281-330-8004"
  );

  expect(manager.getRole()).toEqual("Manager");
});
