const findSpecial = (el) => {
  if (el.getGithub) {
    return el.getGithub();
  } else if (el.getSchool) {
    return el.getSchool();
  } else if (el.getOfficeNumber) {
    return el.getOfficeNumber();
  }
}

const generateCard = (el) => {
  return `<section>
  <header>
    ${el.getName()} 
    <br />
    ${el.getRole()}
  </header>
  <ul>
    <li>${el.getId()}</li>
    <li>${el.getEmail()}</li>
    <li>${findSpecial(el)}</li>
  </ul>
</section>
`
}

const generatePage = (data) => {
  return `
  <!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Team-Space</title>
</head>
<body>
  <main>
    <header>
      Welcome to team space!!
    </header>
${data.map(el => generateCard(el)).toString()}
  </main>
</body>
</html>
  `
}
module.exports = generatePage;