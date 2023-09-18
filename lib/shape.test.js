const {Circle} = require('./shapes');

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
})