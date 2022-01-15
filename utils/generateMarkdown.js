// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

const getLicense = (license) => {
  if (license === 'GNU AGPLv3') {
    return 'GNU_AGPLv3'
  } else if (license === 'GNU GPLv3') {
    return 'GNU_GPLv3'
  } else if (license === 'GNU LGPLv3') {
    return 'GNU_LGPLv3'
  } else if (license === 'Mozilla Public License 2.0') {
    return 'Mozilla'
  } else if (license === 'Apache License 2.0') {
    return 'Apache'
  } else if (license === 'MIT License') {
    return 'MIT'
  }
};

function renderLicenseBadge(license) {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>{

const badge = renderLicenseBadge(getLicense(data.license));

return `##${data.title}  

${badge}

--[Table of Contents]--

    1.[Description](#description)
    2.[Install](#install)
    3.[Instructions](#instructions)
    4.[Credits](#credits)
    5.[Questions](#email)

##Description
${data.description}

##Install
${data.install}

##Instructions
${data.instructions}

##Credits
${data.credits}

For any questions, contact me here:
-${data.email}
-${data.github}`
};

module.exports = generateMarkdown;
