const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
// Prompt the user for title
{
  type: "input",
  message: "What is the title of your project?",
  name: "title",
},
// Prompt the user for a description
{
  type: "input",
  message: "Give a description of your project.",
  name: "description",
},
// Prompt for installation instructions
{
  type: "input",
  message: "What are the installation instructions?",
  name: "installation",
},
// Prompt for usage information
{
  type: "input",
  message: "What are the usage instructions?",
  name: "usage",
},
// Prompt for contribution guidelines
{
  type: "input",
  message: "What are the contribution guidelines?",
  name: "contribution",
},
// Prompt for test instructions
{
  type: "input",
  message: "What are the test instructions?",
  name: "tests",
},
// Prompt for GitHub username
{
  type: "input",
  message: "What's your GitHub username?",
  name: "username",
},
// Prompt to choose a license from a list of options
{
  type: "list",
  message: "Which license do you want to use for your project?",
  name: "license",
  choices: [
    "MIT License",
    "GNU General Public License V3",
    "Apache License 2.0",
    "The Unlicense",
    "Mozilla Public License 2.0",
    "Boost Software License 1.0"
  ],
},
// Prompt to choose a technologies used
{
  type: "checkbox",
  message: "Which technologies were used in this project?",
  name: "technologies",
  choices: [
    "HTML",
    "CSS",
    "JavaScript",
    "Node.js",
    "React",
    "Python",
    "Ruby",
    "C++",
    "C#",
  ],
},
];

// function to write README file
function init(fileName, data) {
  // Use the fs module to write the generated README file to disk
  const readmeTemplate = `
  # ${data.title}

  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution Guidelines](#contribution-guidelines)
  - [Tests](#tests)
  - [License](#license)

  ## Installation

  ${data.installation}

  ## Usage

  ${data.usage}

  ## Contribution Guidelines

  ${data.contribution}

  ## Tests

  ${data.tests}

  ## License

  This project is licensed under the ${data.license} license.

  ## Technologies Used

  ${data.technologies.map(tech => `- ${tech}`).join("\n")}

  ## Contact Me

  You can contact me at my [GitHub profile](https://github.com/${data.username}).`;

  fs.writeFileSync(path.join(process.cwd(), fileName), readmeTemplate);
  console.log(`README.md file generated successfully!`);
}

// function call to initialize program
inquirer.prompt(questions).then(answers => {
  init("README.md", answers);
});
