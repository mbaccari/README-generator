// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const markdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?'},

  { type: 'input',
    name: 'description',
    message: 'Describe your project'},

  { type: 'input',
    name: 'install',
    message: 'Describe how to install your project'},

  { type: 'input',
    name: 'instructions',
    message: 'Describe how to use your project'},

  { type: 'input',
    name: 'credits',
    message: 'Credit project contributors'},

  { type: 'list',
    name: 'license',
    message: 'Select a license',
    choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 
    'Apache License 2.0', 'MIT License']},

  { type: 'input',
    name: 'email',
    message: 'Enter your email'},
    
  { type: 'input',
    name: 'github',
    message: 'Enter your Github name'}
  
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(answers => {

            const template = markdown(answers);

            fs.appendFile('README.md', template, (err) =>
            err ? console.error(err) : console.log('Commit logged!'));

        });
}

// Function call to initialize app
init();
