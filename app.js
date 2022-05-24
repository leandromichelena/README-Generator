const inquirer = require('inquirer');

const writeFile = require('./utils/file-system');
const markdownTemplate = require('./src/templateMD');

const promptQuestions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'projectTitle',
            message: 'What is the name of your project?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                }
                else {
                    console.log('Please type your project name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please describe your project.',
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Please provide instructions to install your project. Provide a step-by-step description of how to get the development environment running.',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Please enter usage information. Provide instructions and examples for use.',
        },
        {
            type: 'confirm',
            name: 'contributionConfirm',
            message: 'Would you like to add a link to the industry standard Contributor Covenant? If you decline, please add your own guidelines for other developes to contribute on the next prompt.',
            default: true
        },
        {
            type: 'input',
            name: 'customContribution',
            message: 'Please enter your custom contribution guidelines',
            when: ({ contributionConfirm }) => {
                if (contributionConfirm) {
                    return false;
                } else {
                    return true;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Did you write tests to your application? If so, please enter provide examples on how to run them.',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please select your project license. A license tells others what they can and cannot do with your code.',
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause “Simplified” License', 'BSD 3-Clause “New” or “Revised” License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozilla Public License 2.0', 'The Unlicense']
        },
        {
            type: 'input',
            name: 'github',
            message: 'Please enter your GitHub Username.',
            validate: github => {
                if (github) {
                    return true;
                }
                else {
                    console.log('Please type your project name.');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address. It will be added to the questions section.'
        }
    ])
};

promptQuestions()
    .then(readmeData => {
        return markdownTemplate(readmeData);
    })
    .then(fileContent => {
        return writeFile(fileContent);
    })
    .then(writeFileResponse => {
        console.log(writeFileResponse);
    })
    .catch(err => {
        console.log(err);
    });