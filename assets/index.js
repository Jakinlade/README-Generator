const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

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
function writeToFile(fileName, data) {
  // Use the fs module to write the generated README file to disk
}

// function to initialize program
function init() {
  // Use Inquirer to prompt the user for information about the project

  // Use the user's responses to generate a markdown string

  // Write the markdown string to a file
}

// function call to initialize program
init();
