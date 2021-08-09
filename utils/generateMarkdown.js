// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const renderLicenseBadge = (data) => { 
let badge = "";
switch (data) {
  case "Apache 2.0":
    badge = `https://img.shields.io/badge/License-Apache%202.0-green.svg`;
    break;
  case "BSD 3-Clause":
    badge = `https://img.shields.io/badge/License-BSD%203--Clause-orange.svg`;
    break;
  case "BSD 2-Clause":
    badge = `https://img.shields.io/badge/License-BSD%202--Clause-orange.svg`;
    break;
  case "GPL v3":
    badge = `https://img.shields.io/badge/License-LGPL%20v3-blue.svg`;
    break;
  case "LGPL v3":
    badge = `https://img.shields.io/badge/License-LGPL%20v3-blue.svg`;
    break;
  case "MIT":
    badge = `https://img.shields.io/badge/License-MIT-yellow.svg`;
    break;
  case "MPL 2.0":
    badge = `https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg`;
    break;
  case "CDDL 1":
    badge = `https://img.shields.io/badge/License-CDDL%201.0-lightblue.svg`;
    break;
  case "EPL 1.0":
    badge = `https://img.shields.io/badge/License-EPL%201.0-red.svg`;
    break;
  default:
    badge = "";
  
}

  return badge;
}
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
const renderLicenseLink = (data) => { 
  let link = "";
switch (data) {
  case "Apache 2.0":
    link = `https://opensource.org/licenses/Apache-2.0`;
    break;
  case "BSD 3-Clause":
    link = `https://opensource.org/licenses/BSD-3-Clause`;
    break;
  case "BSD 2-Clause":
    link = `https://opensource.org/licenses/BSD-2-Clause`;
    break;
  case "GPL v3":
    link = `https://www.gnu.org/licenses/gpl-3.0`;
    break;
  case "LGPL v3":
    link = `https://www.gnu.org/licenses/lgpl-3.0`;
    break;
  case "MIT":
    link = `https://opensource.org/licenses/MIT`;
    break;
  case "MPL 2.0":
    link = `https://opensource.org/licenses/MPL-2.0`;
    break;
  case "CDDL 1":
    link = `https://opensource.org/licenses/CDDL-1.0`;
    break;
  case "EPL 1.0":
    link = `https://opensource.org/licenses/EPL-1.0`;
    break;
  default:
    link = "";
}

  return link;
}
// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const renderLicenseSection = (license) => {
  if (license === "") {
    let licenseSection = "";
    return licenseSection;
  } else {
    let licenseSection = `![License](${renderLicenseBadge(license)})\n

[License](<${renderLicenseLink(license)}>)`
    return licenseSection;
    }
  }


// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.title}

${renderLicenseSection(data.license)}
    
## Table of Contents
    
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Testing](#testing)
- [Questions](#questions)
    
## Description
    
${data.description}
    
## Authors
    
${data.authors}
    
## Installation
    
${data.installation}
    
## Usage
    
${data.usage}
    
## Contributing
    
${data.contributing}
    
## Testing
    
${data.tests}
    
## Special Thanks and Acknowledgments
    
${data.acknowledgments}
    
## Questions
    
Please reach out to ${data.email} with any questions you may have
  
[Github Profile](https://github.com/${data.username})

${renderLicenseLink()}
`;
}


module.exports = generateMarkdown;
