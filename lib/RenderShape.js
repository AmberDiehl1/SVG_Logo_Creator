const { Circle, Square, Triangle } = require("./shapes");

function renShape(answers) {
  if (answers.shape === 'circle') {
    const newCircle = new Circle(answers.text, answers.text_color, answers.shape_color);
    return newCircle.render();
  }
  if (answers.shape === 'square') {
    const newSquare = new Square(answers.text, answers.text_color, answers.shape_color);
    return newSquare.render();
  }
  if (answers.shape === 'triangle') {
    const newTriangle = new Triangle(answers.text, answers.text_color, answers.shape_color);
     return newTriangle.render();
  }
  }

  module.exports = renShape;