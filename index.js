const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const util = require('util');
const writeFileAsync = util.promisify(fs.writeFile);


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
                type: 'input',
                name: 'usage',
                message: 'Please describe how your application will be used.'
            },

            {
                type: 'input',
                name: 'contributing',
                message: 'How should one go about contributing to this project?'
            },

            {
                type: 'input',
                name: 'authors',
                message: 'Please list everyone who may have worked on this project'
            },

            {
                type: 'input',
                name: 'acknowledgments',
                message: 'Please list any special thanks or acknowledgments here.'
            },

            {
                type: 'input',
                name: 'tests',
                message: 'What tests were used on this project?'
            },

            {
                type: 'list',
                name: 'license',
                message: 'Which license is your project using?',
                choices: ['Apache 2.0', 'BSD 3-Clause', 'BSD 2-Clause', 'GPL v3', 'LGPL v3', 'MIT', 'MPL 2.0', 'CDDL 1', 'EPL 1.0', '']
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


const init = () => {
    questions()
        .then((data) => writeFileAsync('README.md', generateMarkdown(data)))
        .then(() => console.log('README generated'))
        .catch((err) => console.log(err))
}

init();