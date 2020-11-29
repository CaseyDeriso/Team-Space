const { default: generate } = require("@babel/generator");
const fs = require('fs')
const Prompter = require("./lib/Prompter.js");
const generatePage = require("./src/page-template.js");

const session = new Prompter();

session
  .prompt()
  .then((data) => {
    return generatePage(data);
  })
  .then(data => {
    fs.writeFile('./dist/index.html', data, err => {
      if (err) throw err;
      console.log('The file has been saved!');
    })
  })
  .catch((err) => console.log(err));
