const Shape = require('./shapes')
//Triangle class to define and set Triangle attributes
class Triangle extends Shape {
    render () {
        return `<polygon points="150, 25 225, 175 75, 175" fill="${this.color}" />`
    }
}

module.exports = Triangle;