const licenseArray = ['Apache', 'GNU_GPLV2', 'Mozilla_PLV2', 'MIT', 'BSD_2Clause', 'Boost_V1' ];
const badgeArray = ['[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
  '[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.html)',
    '[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)',
    '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)',
    '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
];
const licenseLink = ['https://opensource.org/license/apache-2-0', 'https://opensource.org/license/lgpl-2-0', 'https://opensource.org/license/mpl-2-0',
  'https://opensource.org/license/mit', 'https://opensource.org/license/page/4?ls=BSD', 'https://opensource.org/license/bsl-1-0'
 ]



// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  let badge = "";
  for (let i = 0; i < licenseArray.length; i++){
    if (licenseArray[i] === license){
      badge = badgeArray[i];
    };
  };
  return badge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  let path = "";
  for (let i = 0; i < licenseArray.length; i++){
    if (licenseArray[i] === license){
      path = licenseLink[i];
      // console.log(path);
    };
  };
  return path;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  let renderArray=['License', 'Badges'];
  if (!license){
    renderArray = [];
  }
  return renderArray;
}

function insertImageLink(image){
  let imageLink = "";
  if (image){
    imageLink='![Screen](./images/Newimage.png)';
    console.log(imageLink);
  }
  return imageLink;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  let tag = [];
  let licenseName = "";
  let badgeName = "";
  let imageLink = insertImageLink(data.images);
  if (data.license === true){
    licenseName = renderLicenseLink(data.licensechoice);
    badgeName = renderLicenseBadge(data.licensechoice);
    tag = renderLicenseSection(data.licensechoice);
    
  };

 let text = `
# ${data.projectname}

## ${data.description}

${data.descriptiontext}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
- [Badges](#badges)
- [Contributions](#contributions)
- [Questions](#questions)
- [Tests](#tests)

## Installation

${data.installationtext}

## Usage

${data.usagetext}

${imageLink}

## Credits

${data.creditstext}

## ${tag[0]}

${licenseName}

## ${tag[1]}

${badgeName}

## Contributions

${data.contributions}

## Questions

${data.gitName}

${data.gitLink}

${data.eMail}

## Tests

${data.testSection}

`;

return text;
}

module.exports = generateMarkdown;
