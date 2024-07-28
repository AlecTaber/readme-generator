// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT") {
      return "![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)";
  } else if (license === "Apache") {
      return "![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)";
  } else if (license === "GNU GPL") {
      return "![License: GPL v3](https://img.shields.io/badge/License-GPLv3-yellow.svg)";
  } else {
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "MIT") {
      return "https://opensource.org/licenses/MIT";
  } else if (license === "Apache") {
      return "https://opensource.org/licenses/Apache-2.0";
  } else if (license === "GNU GPL") {
      return "https://www.gnu.org/licenses/gpl-3.0";
  } else {
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `## License
  
  This project uses the ${license} License. For more information, visit [license link](${renderLicenseLink(license)}).`
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description 

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Tests](#tests)
- [Contact](#contact)

## Installation

${data.installation}

## Usage

${data.usage}

## Credits

${data.credits}
${data.github}
${data.email}


${renderLicenseBadge(data.license)}
${renderLicenseSection(data.license)}


## Features


## Tests

${data.test}

## Contact

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})

`;
}

export default generateMarkdown;
