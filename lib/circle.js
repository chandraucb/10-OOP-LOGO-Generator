const Shape = require("./shapes");

//Circle class to define and set circle attributes
class Circle extends Shape {
  render() {
    return `<circle cx="150" cy="100" r="75" fill="${this.color}" />`;
  }
}

module.exports = Circle;
