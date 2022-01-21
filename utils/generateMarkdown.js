// getting correct format to put in badge link
const getLicense = (license) => {
  console.log(license)
  if (license === 'GNU AGPLv3') {
    return 'agpl-3.0'
  } else if (license === 'GNU GPLv3') {
    return 'gpl-3.0'
  } else if (license === 'GNU LGPLv3') {
    return 'lgpl-3.0'
  } else if (license === 'Mozilla Public License 2.0') {
    return 'Mozilla'
  } else if (license === 'Apache License 2.0') {
    return 'Apache'
  } else if (license === 'MIT License') {
    return 'MIT'
  } else {
    return "";
  }
};
// getting correct format to put into a link
const licenseLink = (license) => {
  if (license === 'GNU AGPLv3') {
    return 'GNU-AGPLv3'
  } else if (license === 'GNU GPLv3') {
    return 'GNU-GPLv3'
  } else if (license === 'GNU LGPLv3') {
    return 'GNU-LGPLv3'
  } else if (license === 'Mozilla Public License 2.0') {
    return 'mpl-2.0'
  } else if (license === 'Apache License 2.0') {
    return 'apache-2.0'
  } else if (license === 'MIT License') {
    return 'mit'
  } else {
    return "";
  }
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
    return `![License: ${license}](https://img.shields.io/badge/License-${license}-yellow.svg)`
  
}



// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
    return `https://choosealicense.com/licenses/${license}`
}

// TODO: Create a function to generate markdown for README
const generateMarkdown = (data) =>{

const link = renderLicenseLink(licenseLink(data.license))

const badge = renderLicenseBadge(getLicense(data.license));



return `##${data.title}  

${badge}

--[Table of Contents]--

1.[Description](#description)

2.[Install](#install)

3.[Instructions](#instructions)

4.[Credits](#credits)

5.[Questions](#email)

## Description

${data.description}


## Install

${data.install}


## Instructions

${data.instructions}


## Credits

${data.credits}


## License

This project is protected under ${data.license}.

${link}


## Questions

-If you have questions, feel free to email me at ${data.email}

-Check out my github profile at https://github.com/${data.github}`
};

module.exports = generateMarkdown;
