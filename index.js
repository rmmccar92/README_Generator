const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
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

// Popular Licenses
// The following OSI-approved licenses are popular, widely used, or have strong communities:
// Apache License 2.0
// https://img.shields.io/badge/License-Apache%202.0-green.svg
// BSD 3-Clause "New" or "Revised" license
// https://img.shields.io/badge/License-BSD%203--Clause-orange.svg
// BSD 2-Clause "Simplified" or "FreeBSD" license
// https://img.shields.io/badge/License-BSD%202--Clause-orange.svg
// GNU General Public License (GPL)
// https://img.shields.io/badge/License-GPLv3-blue.svg
// GNU Library or "Lesser" General Public License (LGPL)
// https://img.shields.io/badge/License-LGPL%20v3-purple.svg
// MIT license
// https://img.shields.io/badge/License-MIT-yellow.svg
// Mozilla Public License 2.0
// https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg
// Common Development and Distribution License
// https://img.shields.io/badge/License-CDDL%201-lightgrey.svg
// Eclipse Public License version 2.0
// https://img.shields.io/badge/License-EPL%201.0-black.svg

// https://img.shields.io/badge/License-${content.badge}-green


// const badges = (badge) => {
//     let img = "";
//     switch (badge) {
//         case "Apache License 2.0":
//             img = `https://img.shields.io/badge/License-Apache%202.0-green.svg`
//             break;
//         case "BSD 3 Clause":
//             img = `https://img.shields.io/badge/License-BSD%203--Clause-orange.svg`
//             break;
//         case "BSD 2 Clause":
//             img = `https://img.shields.io/badge/License-BSD%202--Clause-orange.svg`
//             break;
//         case "GPL":
//             img = `https://img.shields.io/badge/License-LGPL%20v3-purple.svg`
//             break;
//         case "MIT":
//             img = `https://img.shields.io/badge/License-MIT-yellow.svg`
//             break;
//         case "MPL":
//             img= ``

//     }

// }

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