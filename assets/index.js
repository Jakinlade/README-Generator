const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
// Prompt the user for title
// Prompt the user for a description
// Prompt for installation instructions
// Prompt for usage information
// Prompt for contribution guidelines
// Prompt for test instructions
// Prompt for GitHub username
// Prompt to choose a license from a list of options
// Prompt to choose a technologies used
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
