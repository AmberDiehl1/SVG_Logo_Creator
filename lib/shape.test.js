const {Circle, Square, Triangle} = require('./shapes');

describe('circle',() => {
  describe('creation of the circle', () => {
    it('should create a circle SVG', () => {
      const newCircle = new Circle('TEA', 'black', 'blue');
      expect(newCircle.render()).toBe(`<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
 
   <circle cx="150" cy="100" r="80" fill="blue" />
 
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">TEA</text>
 
 </svg>`)
    })
  })
});
describe('square',() => {
  describe('creation of the square', () => {
    it('should create a square SVG', () => {
      const newSquare = new Square('SQU', 'blue', 'orange');
      expect(newSquare.render()).toBe(`<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
 
    <rect width="100%" height="100%" fill="orange" />
 
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">SQU</text>
 
 </svg>`)
    })
  })
});
describe('triangle',() => {
  describe('creation of the triangle', () => {
    it('should create a triangle SVG', () => {
      const newTriangle = new Triangle('AJD', 'teal', 'pink');
      expect(newTriangle.render()).toBe(`<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
 
      <polygon points="150, 18 244, 182 56, 182" fill="pink" />
 
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="teal">AJD</text>
 
 </svg>`)
    })
  })
});