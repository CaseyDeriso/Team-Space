const findSpecial = (el) => {
  let specialName = ""
  let specialEl = ''
  if (el.getGithub) {
    specialName = 'GitHub: '
    specialEl = `href="https://github.com/${el.getGithub()}"`
    return [specialName, specialEl, el.getGithub()]
  } else if (el.getSchool) {
    specialName = 'School: '
    specialEl = `href="#"`
    return [specialName, specialEl, el.getSchool()]
  } else if (el.getOfficeNumber) {
    specialName = 'Office Number: '
    specialEl = `href="tel:+1${el.getOfficeNumber()}"`
    return [specialName, specialEl, el.getOfficeNumber()]
  }
};

const generateCard = (el) => {
  let [title, element, special] = findSpecial(el)
  return `
<section class="card cell" style="margin: 10px">
  <header class="card-divider callout primary">
    ${el.getName()} 
    <br />
    Role: ${el.getRole()}
  </header>
  <address>
    <li>Employee ID: ${el.getId()}</li>
    <li>Email: <a href="mailto:${el.getEmail()}">${el.getEmail()}</a></li>
    <li>${title} <a ${element}>${special}</a></li>
  </address>
</section>
`;
};

module.exports = (data) => {
 return `
 <!DOCTYPE html>
 <html class="no-js" lang="en">
   <head>
     <meta charset="utf-8" />
     <meta http-equiv="x-ua-compatible" content="ie=edge" />
     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
     <title>Team Space</title>
     <link
       rel="stylesheet"
       href="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/css/foundation.min.css"
       integrity="sha256-ogmFxjqiTMnZhxCqVmcqTvjfe1Y/ec4WaRj/aQPvn+I="
       crossorigin="anonymous"
     />
   </head>
   <body>
     <div class="top-bar">
       <div class="top-bar-left">
         <ul class="dropdown menu" data-dropdown-menu>
           <li class="menu-text">Welcome to team space!</li>
         </ul>
       </div>
     </div>
     <main class="grid-container">
     <div class="grid-x grid-margin-x small-up-1 medium-up-2 large-up-3">
${data.map((el) => generateCard(el)).join('')}
</div>

</main>
<script
  src="https://cdn.jsdelivr.net/npm/foundation-sites@6.6.3/dist/js/foundation.min.js"
  integrity="sha256-pRF3zifJRA9jXGv++b06qwtSqX1byFQOLjqa2PTEb2o="
  crossorigin="anonymous"
></script>
</body>
</html>
`;
};