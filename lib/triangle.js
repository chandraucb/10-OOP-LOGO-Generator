const Shape = require('./shapes')
//Triangle class to define and set Triangle attributes
class Triangle extends Shape {
    render () {
        return `<polygon points="150, 50 225, 200 75, 200" fill="${this.color}" />`
    }
}

module.exports = Triangle;