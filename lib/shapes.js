class Shape {
  constructor(text, text_color, shape_color) {
    this.text = text;
    this.text_color = text_color;
    this.shape_color = shape_color;
  }
}
// Circle Shape
class Circle extends Shape {
  render() {
    return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
 
   <circle cx="150" cy="100" r="80" fill="${this.shape_color}" />
 
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
 
 </svg>`
  }
}
// Square Shape
class Square extends Shape {
  render() {
    return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
 
    <rect width="100%" height="100%" fill="${this.shape_color}" />
 
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
 
 </svg>`
  }
}
// Triangle Shape 
class Triangle extends Shape {
  render() {
    return `<svg version="1.1"
      width="300" height="200"
      xmlns="http://www.w3.org/2000/svg">
 
      <polygon points="150, 18 244, 182 56, 182" fill="${this.shape_color}" />
 
   <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.text_color}">${this.text}</text>
 
 </svg>`
  }
}

module.exports = {Circle, Square, Triangle };
