const inquirer = require('inquirer');
const fs = require('fs');
const {Circle, Square, Triangle} = require('./lib/shapes');

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

function init() {
  inquirer.prompt(questions).then((answers) => {
    console.log(answers)
    if (answers.shape === 'circle') {
      const newCircle = new Circle(answers.text, answers.text_color, answers.shape, answers.shape_color);
      newCircle.render();
    }
    if (answers.shape === 'square') {
      const newSquare = new Square(answers.text, answers.text_color, answers.shape, answers.shape_color);
      newSquare.render();
    }
    if (answers.shape === 'triangle') {
      const newTriangle = new Triangle(answers.text, answers.text_color, answers.shape, answers.shape_color);
      newTriangle.render();
    }
    writeToFile('./examples/logo.svg',shapes(answers))
    });
}


init();