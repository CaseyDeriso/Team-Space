const { test, expect } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

test("created engineer object with github property", () => {
  const engineer = new Engineer(
    "Casey Adam Deriso",
    1,
    "caseyderiso@gmail.com",
    "CaseyDeriso"
  );

  expect(engineer.github).toEqual("CaseyDeriso");
});

test("getGithub() property returns github user name as string", () => {
  const engineer = new Engineer(
    "Casey Adam Deriso",
    1,
    "caseyderiso@gmail.com",
    "CaseyDeriso"
  );

  expect(engineer.getGithub()).toEqual("CaseyDeriso");
});

test("getRole() overrides employee to return engineer as string", () => {
  const engineer = new Engineer(
    "Casey Adam Deriso",
    1,
    "caseyderiso@gmail.com",
    "CaseyDeriso"
  );

  expect(engineer.getRole()).toEqual("Engineer");
});
