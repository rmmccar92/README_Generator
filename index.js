const fs = require('fs');
const inquirer = require('inquirer');
const util = require('util');


const writeFileAsync = util.promisify(fs.writeFile);

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

const questions = () => {
    return inquirer
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
                name: 'username',
                message: 'Please enter your github username.'
            },

            {
                type: 'input',
                name: 'email',
                message: 'Please enter your email address.'
            }

        ])
}

const generateREADME = (content) =>
    `# ${content.title}
    ${content.description}
    ${content.installation}
    ${content.license}
    ${content.username}
    ${content.email}`


const init = () => {
    questions()
        .then((content) => writeFileAsync('README.md', generateREADME(content)))
        .then(() => console.log('README generated'))
        .catch((err) => console.log(err))
}

init();