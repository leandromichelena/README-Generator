const contributionContent = (contributionConfirm, customContribution) => {
    if (contributionConfirm) {
        return `## Contributing
If you would like to contribute to this project, please follow the [Contributor Covenant](https://www.contributor-covenant.org/)`;
    }
    else {
        return`## Contributing 
${customContribution}`;
    }
};

const markdownTemplate = (readmeData) => {
    console.log(readmeData);
    const { projectTitle, description, installation, usage, contributionConfirm, customContribution, tests, license, github, email } = readmeData;
    
    const licenseKey = license.replaceAll(' ', '_');

    return `# ${projectTitle}

## Description
${description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contribution](#contribution)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

## Installation
${installation}

## Usage
${usage}

${contributionContent(contributionConfirm, customContribution)}
    
## Tests
${tests}

## License
![](https://img.shields.io/badge/License-${licenseKey}-green) <br>
This project is licensed under the ${license}

## Questions
If you have any questions, please reach out to me here on [Github](https://github.com/${github}) or by [email](mailto:${email}).
`
};

module.exports = markdownTemplate;