const fs = require('fs');
const inquirer = require('inquirer');

// Title
// Description
// Table of Contents
// Installation 
// Usage 
// License List From Badges
// Github Username
// email address
// Contributing
// Tests
// Questions

inquirer 
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the project title?'
        },

        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.'
        },

        {
            type: 'input',
            name: 'installation',
            message: 'Please explain the installation procedure.'

        },

        {
            type: 'list',
            name: 'license',
            message: 'Which license is your project using?',
            choices: ['email', 'phone', 'telekinesis']
        },

        {
            type: 'input',
            name: 'GHUsername',
            message: 'Please enter your github username.'
        },

        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        }
    ])