// TODO: Include packages needed for this application
import inquirer from 'inquirer';
import fs from 'fs';

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
        name: 'contributing',
        message: 'Who contributed to your project?',
    }, {
        type: 'input',
        name: 'test',
        message: 'How can you test your project?',
    },
    //{
        //type: 'list',
        //name: 'license',
        //message: 'What is the title of your project?',
        //choices: [],
    //},
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

inquirer.prompt(questions).then((answers) => {
    console.log(answers);
});


// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
