const { default: generate } = require("@babel/generator");
const Prompter = require("./lib/Prompter.js");
const generatePage = require("./src/page-template.js");

const session = new Prompter();

session
  .prompt()
  .then((data) => {
    generatePage(data);
  })
  .then(data => {
    console.log(data)
  })
  .catch((err) => console.log(err));
