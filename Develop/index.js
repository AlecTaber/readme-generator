// TODO: Include packages needed for this application

import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe your project:',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your project?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your project?',
    },
    {
        type: 'input',
        name: 'credits',
        message: 'Who contributed to your project?',
    }, {
        type: 'input',
        name: 'test',
        message: 'How can you test your project?',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What is the title of your project?',
        choices: ["MIT", "Apache", "GNU GPL"],
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter you GitHub username:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter you email address:',
    },
];





// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error('Error writing file:', err);
        } else {
            console.log('README.md has been generated successfully!');
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            const markdownContent = generateMarkdown(answers);
            writeToFile('generatedREADME.md', markdownContent);
        })
        .catch((error) => {
            console.error('Error during inquirer prompt:', error);
        });
}

// Function call to initialize app
init();
