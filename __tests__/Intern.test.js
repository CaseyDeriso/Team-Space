const { test, expect } = require("@jest/globals");
const Intern = require("../lib/Intern");

test("creates intern object with school property", () => {
  const intern = new Intern(
    "Casey Adam Deriso",
    1,
    "caseyderiso@gmail.com",
    "University of Texas"
  );

  expect(intern.school).toEqual("University of Texas");
});

test("getSchool method returns school as a string", () => {
  const intern = new Intern(
    "Casey Adam Deriso",
    1,
    "caseyderiso@gmail.com",
    "University of Texas"
  );

  expect(intern.getSchool()).toEqual("University of Texas");
});

test("getRole() overrides employee to return intern as string", () => {
  const intern = new Intern(
    "Casey Adam Deriso",
    1,
    "caseyderiso@gmail.com",
    "University of Texas"
  );

  expect(intern.getRole()).toEqual("Intern");
});
