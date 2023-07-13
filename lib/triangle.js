const Shape = require('./shapes')

class Triangle extends Shape {
    render () {
        return `<polygon points="150, 50 225, 200 75, 200" fill="${this.color}" />`
    }
}

module.exports = Triangle;