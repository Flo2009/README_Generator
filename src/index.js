// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generate = require('./utils/generateMarkdown');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = ['Please Enter your Project Name?','Please Enter your Project Description?', 'Please Write your Project Description?',
    'Please describe the installation steps?', 'Please describe how to use the application?', 'Name the credits you want to list?',
    'Do you want to include license?', 'Which license do you want to include?', 'Let the community know how to contribute', 'Enter your GitHub Username',
    'Enter your GitHub Profile Link', 'Enter your Email', 'Please provide how to test the application and examples', 'Please Enter a Name for The README',
    'Do you want to include Screenshots?'
    
];

const licenseArray = ['Apache', 'GNU_GPLV2', 'Mozilla_PLV2', 'MIT', 'BSD_2Clause', 'Boost_V1'];

let fileName = 'README.md';
// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName}.md`, data, (err) => {if (err) console.log(err)});
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
          {
            type: 'input',
            message: questions[0],
            name: 'projectname',
          },
          {
            type: 'input',
            message: questions[1],
            name: 'description',
          },
          {
            type: 'editor',
            message: questions[2],
            name: 'descriptiontext',
          },
          
          {
            type: 'editor',
            message: questions[3],
            name: 'installationtext',
          },
          {
            type: 'editor',
            message: questions[4],
            name: 'usagetext',
          },
          
          {
            type: 'editor',
            message: questions[5],
            name: 'creditstext',
          },
          {
            type: 'confirm',
            message: questions[6],
            name: 'license',
          },
          {
            type: 'list',
            message: questions[7],
            name: 'licensechoice',
            choices: licenseArray,
          },
          {
            type: 'editor',
            message: questions[8],
            name: 'contributions',
          },
          {
            type: 'input',
            message: questions[9],
            name: 'gitName',
          },
          {
            type: 'input',
            message: questions[10],
            name: 'gitLink',
          },
          {
            type: 'input',
            message: questions[11],
            name: 'eMail',
          },
          {
            type: 'editor',
            message: questions[12],
            name: 'testSection',
          },
          {
            type: 'input',
            message: questions[13],
            name: 'filename',
          },
          {
            type: 'confirm',
            message: questions[14],
            name: 'images',
          },
          

    ])
    .then((response) => {
        if (response){
            // console.log(response);
            // console.log(response.creditstext);
            let data = generateMarkdown(response);
            if (response.filename){
                fileName=response.filename;
            }
            writeToFile(fileName, data)
        }else{
            console.log("Please give the necessary information to complete the README file!")
        }
    })
}
// Function call to initialize app
init();

// # MIT

// [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)


// # Apache License 2.0

// [![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)


// # GNU 3.0

// [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)


// # BSD 2-Clause 

// [![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)

// # Mozilla

// [![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)





