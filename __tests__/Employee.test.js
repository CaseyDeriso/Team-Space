const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("creates an employee object", () => {
  const employee = new Employee(
    "Casey Adam Deriso",
    1,
    "caseyderiso@gmail.com"
  );

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(Number));
  expect(employee.email).toEqual(expect.any(String));
});

test("getName() method returns name as a String", () => {
  const employee = new Employee(
    "Casey Adam Deriso",
    1,
    "caseyderiso@gmail.com"
  );

  expect(employee.getName()).toEqual("Casey Adam Deriso");
});

test("getId() method returns id as a Number", () => {
  const employee = new Employee(
    "Casey Adam Deriso",
    1,
    "caseyderiso@gmail.com"
  );

  expect(employee.getId()).toEqual(1)
});

test("getEmail() method returns email as a string", () => {
  const employee = new Employee(
    "Casey Adam Deriso",
    1,
    "caseyderiso@gmail.com"
  );

  expect(employee.getEmail()).toEqual("caseyderiso@gmail.com")
});

test("getRole() method returns role as a string", () => {
  const employee = new Employee(
    "Casey Adam Deriso",
    1,
    "caseyderiso@gmail.com"
  );

  expect(employee.getRole()).toEqual("Employee");
})