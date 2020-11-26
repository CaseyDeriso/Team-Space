const { ENGINE_METHOD_RAND } = require("constants");
const inquirer = require("inquirer");
const Engineer = require("./Engineer.js");
const Intern = require("./Intern");
const Manager = require("./Manager");

class Prompter {
  constructor() {}

  prompt(teamArr) {
    if (!teamArr) {
      teamArr = [];
    }

    inquirer
      .prompt([
        {
          type: "list",
          name: "objectType",
          message: "Please choose a job role for team member.",
          choices: ["Engineer", "Intern", "Manager"],
        },
        {
          type: "input",
          name: "name",
          message: "Please enter team member's name.",
        },
        {
          type: "input",
          name: "id",
          message: "Please enter team member's ID"
        },
        {
          type: "input",
          name: "email",
          message: "Please enter team member's email.",
        },
        {
          type: "input",
          name: "special",
          message: "Please enter manager's office number.",
          when: function (data) {
            if (data.objectType == "Manager") {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          type: "input",
          name: "special",
          message: "Please enter intern's school.",
          when: function (data) {
            if (data.objectType == "Intern") {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          type: "input",
          name: "special",
          message: "Please enter engineer's GitHub username",
          when: function (data) {
            if (data.objectType == "Engineer") {
              return true;
            } else {
              return false;
            }
          },
        },
        {
          type: "confirm",
          name: "nextMemberConfirm",
          message: "Would you like to add another team member?"
        }
      ])
      .then((answers) => {
        let employee = {};
        switch (answers.objectType) {
          case "Engineer":
            employee = new Engineer(
              answers.name,
              answers.id,
              answers.email,
              answers.special
            );
            break;
          case "Intern":
            employee = new Intern(
              answers.name,
              answers.id,
              answers.email,
              answers.special
            );
            break;
          case "Manager":
            employee = new Manager(
              answers.name,
              answers.id,
              answers.email,
              answers.special
            );

            break;
        }

        teamArr.push(employee);
        console.log(teamArr);
        if (answers.nextMemberConfirm) {
          this.prompt(teamArr);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = Prompter;
