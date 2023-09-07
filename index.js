const inquirer = require('inquirer');
const fs = require('fs');
const logoPlace = './examples/logo.svg'
const renShape = require('./lib/RenderShape')

const questions = [
  {
    type: 'input',
    name: 'text',
    message: 'Please enter 3 characters for your logo',
    validate: (text) => text.length <= 3 || 'Please type no more than three characters'
  },
  {
    type: 'input',
    name: 'text_color',
    message: 'What color (solid or hexadecimal) would you like your characters to have?',
  },
  {
    type: 'list',
    name: 'shape',
    message: 'What kind of shape do you want for your logo?',
    choices: ['circle', 'square', 'triangle'],
  },
  {
    type: 'input',
    name: 'shape_color',
    message: 'What color (solid or hexadecimal) would you like your shape to have?',
  },
];

// function for svg file
function createLogo(answers) {
  const createSVG = renShape(answers);
  fs.writeFile(logoPlace, createSVG, () =>
  console.log('created logo.svg'));
}


function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    createLogo(answers);
    })
    .catch(err => {
      console.log(err)
    });
}


init();